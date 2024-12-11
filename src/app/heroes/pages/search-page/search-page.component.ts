import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'heroes-search-page',
  templateUrl: './search-page.component.html',
  styles: ``
})
export class SearchPageComponent {
  public searchInput = new FormControl('');
}
