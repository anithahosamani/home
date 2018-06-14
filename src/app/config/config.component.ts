import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
@Input() tabledata;


str="SNO";
projecttype="Project Type";
 // @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

}
