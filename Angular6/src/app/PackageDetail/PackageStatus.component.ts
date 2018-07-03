import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { Router } from "@angular/router";

// import { PackagesService } from './Packages.service'
import { PackageDetailService } from './PackageDetail.service';

@Component({
  selector: 'packageStatus',
  // template: '<p>PackageDetail</p>'
  templateUrl: './PackageStatus.component.html',

  styleUrls: ['./PackageStatus.component.sass']
})
export class PackageStatusComponent {
  id: number;
  package: any;
  logActive = true;
  modalActive = false;
  modalData = '';
  interval;
  modalLogActive = false;
  modalLoading = true;

  constructor(private packageService: PackageDetailService, private route: ActivatedRoute, private router: Router) {
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
    // this.interval = setInterval(() => {
    //   this.updateData();
    // }, 3000);
  }

  showModal(process, type) {
    // this.modalActive = true;
    //load data fromserver...
    this.modalLogActive = true;
    this.modalLoading = true;
    this.packageService.getLogFile(type, process.process_id).subscribe((data) => {
      // console.log(data);
      this.modalLogActive = true;
      this.modalLoading = false;
      this.modalData = data.replace("\n", "<br>");
    });
    // '/process/${process.process_id}/error_log'
  }

  startWorkflow() {
    this.packageService.startWorkflow(this.package.package_id);
    this.updateData();
  }

  updateData() {
    this.packageService.getPackage(this.id).subscribe((data) => {
      // console.log(data);
      this.package = data;
    });
  }

  removePackage() {
    this.packageService.removePackage(this.id).subscribe((data) => {
      // console.log(data);
    });
    this.router.navigate(['packages']);
  }
}
