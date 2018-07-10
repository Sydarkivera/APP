import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { Router } from "@angular/router";

import { APIService } from '../Services/api.service';

@Component({
  selector: 'packageStatus',
  templateUrl: './PackageStatus.component.html',

  styleUrls: ['./PackageStatus.component.sass']
})
export class PackageStatusComponent {
  id: number;
  package: any;
  modalActive = false;
  modalData = '';
  interval;
  modalactive = false;
  modalLoading = true;
  modalType = 'info';
  modalProcess = undefined;

  constructor(private apiService: APIService, private route: ActivatedRoute, private router: Router) {
    this.package = {
      name: "Name"
    };
    router.events.subscribe((val) => {
        clearInterval(this.interval);
    });
  }

  ngOnInit() {
    this.route.parent.params.subscribe(params => {
       this.id = +params['id'];
        this.updateData();
    });

    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.updateData();
    }, 3000);
  }

  showModal(process, type) {
    //load data fromserver...
    this.modalactive = true;
    this.modalLoading = true;
    this.modalData = "";
    if (type == 'info_log') {
      this.modalType = 'info';
      this.apiService.getLogFile(type, process.process_id).subscribe((data) => {
        this.modalLoading = false;
        this.modalData = this.sanitizeLog(data);
      });
    } else {
      this.modalLoading = false;
      this.modalType = 'error';
      this.modalProcess = process;
    }
  }

  startWorkflow() {
    this.apiService.startWorkflow(this.package.package_id);
    this.updateData();
  }

  finishPackage() {
    this.apiService.finishPackage(this.package.package_id);
    this.updateData();
  }

  updateData() {
    this.apiService.getPackage(this.id).subscribe((data) => {
      this.package = data;
    });
  }

  removePackage() {
    this.apiService.removePackage(this.id).subscribe((data) => {
    });
    this.router.navigate(['packages']);
  }

  sanitizeLog(data) {
    // convert the file to html friendly text
    return data.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;").split("\n").join("<br>");
  }
}
