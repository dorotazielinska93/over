import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hero-selection',
  templateUrl: './hero-selection.component.html',
  styleUrls: ['./hero-selection.component.scss']
})
export class HeroSelectionComponent implements OnInit {
  @Output() getHealers = new EventEmitter<any>();
  @Output() getTanks = new EventEmitter<any>();
  @Output() getDps = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  public searchForTanks(): void {
    this.getTanks.emit();
  }

  public searchForHealers(): void {
    this.getHealers.emit();
  }

  public searchForDps(): void {
    this.getDps.emit();
  }
}
