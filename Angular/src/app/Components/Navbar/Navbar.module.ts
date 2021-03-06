import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { RouterModule } from '@angular/router';

//components
import { NavbarComponent } from './Navbar.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        NavbarComponent
    ],
    exports: [
        NavbarComponent
    ],
    entryComponents: [
        NavbarComponent
    ]
})
export class NavbarModule {

}
