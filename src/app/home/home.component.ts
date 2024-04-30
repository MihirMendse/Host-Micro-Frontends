import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  @ViewChild('placeholder',{read: ViewContainerRef})
  viewContainer!: ViewContainerRef;

  async load():Promise<void>{
    if(this.viewContainer.length === 0){
      const m = await loadRemoteModule({
        type: 'module',
        //remoteEntry: "http://localhost:4002/remoteEntry.js",
        remoteEntry: "https://main--microfrontend-faqs-page.netlify.app/",
        exposedModule:"./Component"
      });
  
      this.viewContainer.createComponent(m.AppComponent)
    }
  }

}
