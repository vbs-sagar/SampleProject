import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl:'app/app.component.html',
})
export class AppComponent  {
    PageHeader: String = 'Employee Details';
    ImgURL: String = 'angular/logo-nav@2x.png';
    FirstName1: String = 'Tom';
    LastName1: String = 'Jerry';
    IsDisabled: Boolean = false;
    badHTML: String = 'Hello <script> alert("Hacked"); </script> world';

    GetFullName(): String {
        return this.FirstName1 + ' and ' + this.LastName1;
    }

}
