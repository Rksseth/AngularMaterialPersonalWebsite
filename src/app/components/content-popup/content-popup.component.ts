import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'content-popup',
  templateUrl: './content-popup.component.html',
  styleUrls: ['./content-popup.component.scss']
})
export class ContentPopupComponent implements OnInit {

  project: any;

  constructor(public dialogRef: MatDialogRef<ContentPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.project = data;
    }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
