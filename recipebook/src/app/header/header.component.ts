import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
   // throw new Error('Method not implemented.');
  }

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
