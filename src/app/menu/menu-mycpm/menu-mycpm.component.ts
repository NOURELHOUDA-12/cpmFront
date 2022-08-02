import { Component, OnInit } from '@angular/core';
import { StorgeService } from '../../Services/storge.service';

@Component({
  selector: 'app-menu-mycpm',
  templateUrl: './menu-mycpm.component.html',
  styleUrls: ['./menu-mycpm.component.css']
})
export class MenuMycpmComponent implements OnInit {

  constructor( private storge:StorgeService) { }

  ngOnInit(): void {
    let s =this.storge.getUser();
    console .log("nooor"+s);
    console.log(s)
  }
}
