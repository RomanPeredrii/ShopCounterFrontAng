import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-messager',
  templateUrl: './messager.component.html',
  styleUrls: ['./messager.component.sass']
})



export class MessagerComponent implements OnInit {

  @Input() st: any;
  constructor() { }

  ngOnInit() {

    console.log(this.st);
  }
ok() {
  this.st.show = false;
}
}
