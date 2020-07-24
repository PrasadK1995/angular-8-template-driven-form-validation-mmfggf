import { Component } from '@angular/core';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
  model: any = {};
  showRegistered = false;
  training = "ONLINE TRAINING";
  onSubmit() {
    this.showRegistered = true;
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model, null, 4));
  }
}
