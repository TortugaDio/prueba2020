import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logearse',
  templateUrl: './logearse.component.html',
  styleUrls: ['./logearse.component.css']
})
export class LogearseComponent implements OnInit {

  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  logearse(){
    this.route.navigate(['menu'],{ skipLocationChange: true });
  }
}
