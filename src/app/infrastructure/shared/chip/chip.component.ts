import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dnd-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
})
export class ChipComponent implements OnInit {
  @Input()
  title;

  @Input()
  rarity;

  constructor() {}

  ngOnInit(): void {}

  get rarityWithoutSpaces() {
    return this.rarity.replace(/\s+/g, '').toLowerCase();
  }
}
