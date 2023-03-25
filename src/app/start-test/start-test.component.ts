import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-start-test',
  templateUrl: './start-test.component.html',
  styleUrls: ['./start-test.component.scss']
})
export class StartTestComponent implements OnInit {

  @ViewChild('name') nameKey!: ElementRef
  constructor() { }

  ngOnInit() {

  }
  startQuiz() {
    localStorage.setItem("name", this.nameKey.nativeElement.value);
  }

}
