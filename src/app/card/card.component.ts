import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public image:string= "https://media.datacenterdynamics.com/media/images/IBM_ZcI0Uet.width-880.jpg";
  public Titulo:string = "Angular course";
  @Input()dataEntrante:any;
  constructor() { }

  ngOnInit(): void {
  }

}
