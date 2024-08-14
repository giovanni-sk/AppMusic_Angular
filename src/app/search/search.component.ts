import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  InputSearch?: string;
  @Output() searchEvent= new EventEmitter<string>();

  SendSearch(){
    this.searchEvent.emit(this.InputSearch);
    console.log(this.InputSearch+"send");
    
  }

}
