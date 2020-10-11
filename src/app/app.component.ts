import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nwu-cvproj';

  goToLink(url: string){
    window.open(url, "_blank");
}
}
