import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';

import { APIService } from '../../Services/api.service';

@Component({
  selector: 'filebrowser',
  templateUrl: './FileBrowser.component.html',
  styleUrls: ['./FileBrowser.component.sass']
})
export class FileBrowserComponent {

  @Input() package_id: number;
  @Input() path: string;
  @Input() active: boolean = false;
  @Output() activeChange = new EventEmitter<boolean>();
  @Input() selectedFiles: any = undefined;

  levels: any[] = [[]]
  fullPath: string[] = []
  selectedLevel = -1
  selectedFile: any = undefined;

  files: any[]

  contextMenuPos = {x: -1, y: -1}
  innerModalVisible = false
  innerModalValue = "";
  innerModalType = "";
  innerModalFile: any;

  @HostListener('document:click', ['$event'])
  clickedOutside($event){
    // here you can hide your menu
    if ($event.button == 0) {
      this.contextMenuPos['x'] = -1;
      this.contextMenuPos['y'] = -1;
    }
  }

  constructor(private apiService: APIService) {

  }

  closeModal() {
    this.active = false;
    this.activeChange.emit(this.active);
  }

  ngOnInit() {
    // root level files is fetched from path input
    this.apiService.getFiles(this.path).subscribe((data) => {
      this.levels[0] = data as [any];
    });
  }

  calculatePath(index, file) {
    let path = "";
    for (let i = 0; i < index; i++) {
      path += this.fullPath[i] + '/';
    }
    path += file.name;
    return path
  }

  openNewLevel(index, file) {
    // event.preventDefault();
    // event.stopPropagation();
    this.selectedLevel = index;
    this.selectedFile = file;

    while(this.levels.length > index+1) {
      this.levels.pop();
      this.fullPath.pop();
    }

    if (file.type == "folder") {
      let path = this.calculatePath(index, file);

      this.apiService.getFiles(this.path, path).subscribe((data) => {
        this.levels.push(data);
        this.fullPath.push(file.name);
      });
    }
  }

  openContextMenu(event, index, file) {
    event.preventDefault();
    event.stopPropagation();
    this.contextMenuPos['x'] = event.clientX;
    this.contextMenuPos['y'] = event.clientY;

    //select the rightclicked item:
    this.openNewLevel(index, file)
  }

  openRenameModal() {
    this.innerModalValue = this.selectedFile.name;
    this.innerModalType = 'rename';
    this.innerModalVisible = true;
  }

  rename() {
    let body = {}
    body['path'] = this.calculatePath(this.selectedLevel, this.selectedFile);
    body['name'] = this.innerModalValue;
    this.apiService.renameFile(this.path, body).subscribe((data) => {
      this.selectedFile.name = this.innerModalValue;
      this.levels.pop();
      if (this.selectedFile.type == 'folder') {
        this.levels.pop();
        this.fullPath[this.fullPath.length-1] = this.innerModalValue
        this.selectedFile = undefined
        this.selectedLevel = -1
      }
      this.levels.push(data);
      this.closeInnerModal()
    })
  }

  getDownloadPath() {
    let path = this.calculatePath(this.selectedLevel, this.selectedFile);

    return this.path + "?path=" + path + "&download"
  }

  openDeleteModal() {
    this.innerModalVisible = true;
    this.innerModalType =  'delete';
  }

  delete() {
    if (!this.selectedFile) {
      return;
    }
    let path = this.calculatePath(this.selectedLevel, this.selectedFile);
    this.apiService.deleteFile(this.path, path).subscribe((data) => {
      if (this.selectedFile.type == 'folder') {
        this.fullPath.pop()
        this.levels.pop()
      }
      this.levels.pop()
      this.levels.push(data);
      this.selectedFile.name = this.fullPath[this.fullPath.length - 1]
      this.selectedFile.type = 'folder';
      this.selectedLevel -= 1;
      this.closeInnerModal()
    });
  }

  openUploadModal() {
    this.innerModalVisible = true;
    this.innerModalType =  'upload';
    this.innerModalValue = "";
  }

  openCreateFolderModal() {
    this.innerModalVisible = true;
    this.innerModalType =  'create';
    this.innerModalValue = "";
  }

  onFileSelected(e) {
    if (e.target.files.length > 0) {
      //check fileFormat
      // if (!e.target.files[0].name.endsWith('.tar')) {
      //   console.error('error, wrong fileType');
      //   this.innerModalValue = "Select file...";
      //   // this.fileStatus = 1;
      // } else {
        this.innerModalFile = e.target.files[0]
        this.innerModalValue = this.innerModalFile.name;
        // this.fileStatus = 2;
      // }
    }
  }

  uploadFile() {
    console.log('upload')
    if (!this.innerModalFile) {
      console.error('no file selected');
      return;
    }
    // this.modalactive = false;
    // this.fileName = "Select file...";

    const formData: FormData = new FormData();
    formData.append('file', this.innerModalFile, this.innerModalValue);

    //calculate the final path:
    let path = this.calculatePath(this.selectedLevel, this.selectedFile);
    let newPath = ""
    if (this.selectedFile.type == "folder") {
      //create the new folder inside this.
      newPath = path + "/" + this.innerModalValue;
    } else {
      // create the new folder in this folder.
      let prev = path.substr(0, path.lastIndexOf('/'));
      if (prev != "") {
        prev += "/"
      }
      newPath = prev + this.innerModalValue;
    }
    formData.append('path', newPath)
    // console.log(this.innerModalValue)
    this.apiService.uploadFile(this.path, formData).subscribe((data) => {
      if (data.type == 4) {
        this.levels.pop();
        this.levels.push(data['body']);
        this.closeInnerModal()
      }
    })
  }

  create() {
    if (!this.selectedFile) {
      return;
    }
    let path = this.calculatePath(this.selectedLevel, this.selectedFile);
    let newPath = ""
    if (this.selectedFile.type == "folder") {
      //create the new folder inside this.
      newPath = path + "/" + this.innerModalValue;
    } else {
      // create the new folder in this folder.
      let prev = path.substr(0, path.lastIndexOf('/'));
      if (prev != "") {
        prev += "/"
      }
      newPath = prev + this.innerModalValue;
    }
    this.apiService.createFolder(this.path, newPath).subscribe((data) => {
      this.levels.pop();
      this.levels.push(data);
      this.closeInnerModal()
    });

  }

  closeInnerModal() {
    console.log('close inner modeal')
    this.innerModalVisible = false
  }
}
