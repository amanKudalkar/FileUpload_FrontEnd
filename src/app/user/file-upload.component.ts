import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styles: []
})
export class FileUploadComponent implements OnInit {

  private fileList:File[] = [];
  errorStatus: boolean;
  successStatus: boolean;
  msg: String;

  constructor(private userService: UserService,private router : Router) { }

  ngOnInit() {
    this.msg = "";
     this.successStatus = false;
     this.errorStatus = false;
  }

  fileChange(e){
    this.fileList = e.target.files;
  }

  onSubmit(){
       if(this.fileList.length>0){
          let file: File = this.fileList[0];
          this.userService.uploadFile(file, localStorage.getItem('username'),localStorage.getItem('password')).subscribe(
              data => this.onSuccessUpload(data),
              error => this.onfailureUpload(error)
          );
       }
  }

  onSuccessUpload(data:any){
    this.msg = data;
    this.successStatus = true;
    this.errorStatus = false;
  }

  onfailureUpload(data:any){
    this.msg = data;
    this.successStatus = false;
    this.errorStatus = true;
  }



}
