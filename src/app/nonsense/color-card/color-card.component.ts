import {
  Component,
  Input,
  OnInit
} from '@angular/core';


@Component({
  selector:    'app-color-card',
  templateUrl: './color-card.component.html',
  styleUrls:   ['./color-card.component.scss']
})
export class ColorCardComponent implements OnInit {
  @Input() cardText: string  = 'Default Text';
  @Input() cardColor: string = 'primary';
  colorClass: string         = `bg-primary`;

  constructor() {
  }

  ngOnInit(): void {
    this.colorClass = `bg-${this.cardColor}`;
  }
}
