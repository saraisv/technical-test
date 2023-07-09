import { Component, Input, OnInit } from '@angular/core';
import { IPhoto } from '../../interfaces/photo.interface';

@Component({
  selector: 'app-inn-card',
  templateUrl: './inn-card.component.html',
  styleUrls: ['./inn-card.component.scss']
})
export class InnCardComponent implements OnInit {

  @Input() photo: IPhoto;

  constructor() { }

  ngOnInit(): void {
  }

}
