import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { VoiceRecognitionService } from './services/voice-recognition.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;
  isSidenavOpen = true;
  title = 'eduOnlineSystems';
  @ViewChild('sidenav') sidenav: MatSidenav | undefined;

  constructor(public service:VoiceRecognitionService){

    navigator.mediaDevices.getUserMedia({audio:true}).then(res=>{
      service.start();
    })
  }
  ngOnInit() {
    this.service.speechInput().subscribe(text => {
      console.log('Speech recognized: ', text);
    });
  }
  
  toggleSidenav() {
  
    this.service.stop()
    this.isCollapsed = !this.isCollapsed;
    if (this.isCollapsed) {
    //  this.sidenav?.close();
      this.isSidenavOpen = false; // set to false to hide sidenav
    } else {
    //  this.sidenav?.open();
      this.isSidenavOpen = true; // set to true to show sidenav
    }
  }
  
}

declare global {
  interface Window {
    SpeechRecognition: any;
  }
}

