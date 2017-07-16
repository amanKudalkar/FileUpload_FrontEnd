import { Response } from '@angular/http';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-file-view',
  templateUrl: './file-view.component.html',
  styles: []
})
export class FileViewComponent implements OnInit {

  documentList: Object[];

  constructor(private userService : UserService) {
    this.getDocuments();
   }

  ngOnInit() {}

  getDocuments(){
    this.userService.getDocuments(localStorage.getItem('username'),localStorage.getItem('password')).subscribe(
			data => {
        		this.documentList = JSON.parse(JSON.parse(JSON.stringify(data)));
      		},
      error => console.log(error)
     )
  }

  downloadFile(fileName:string){
     this.userService.downloadFile(localStorage.getItem('username'),localStorage.getItem('password'),fileName).subscribe(
			data => this.dnFile(data),
      error => console.log(error)
     )
  }

  dnFile(data: Response){
      var blob = new Blob([data],{ type: 'application/pdf' });
      FileSaver.saveAs(blob, "export.pdf"); 
  }


}
