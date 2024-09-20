import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, OnChanges {
  searchQuery: string = '';

  constructor() { }

  ngOnInit(): void {


  }
  ngOnChanges(changes: SimpleChanges): void { }


  onSearchChange(query: any) {
    this.searchQuery = this.formatSearchQuery(query);
  }

  formatSearchQuery(query: string): string {
    // Split query by spaces to handle sections
    const parts = query.split(' ');

    // Format each part separately
    const formattedParts = parts.map(part => this.formatPart(part));
    
    // Join the formatted parts with colons
    return formattedParts.join(':');
  }

  formatPart(part: string): string {
    // Check if part contains only numbers
    if (/^\d+$/.test(part)) {
      return this.formatNumericPart(part);
    } 
    
    // If part contains non-numeric characters, replace spaces with colons and return
    return part.replace(/\s+/g, ':');
  }

  formatNumericPart(part: string): string {
    // Split the number into chunks of 3 digits
    let result = '';
    for (let i = 0; i < part.length; i += 3) {
      if (result.length > 0) {
        result += ':';
      }
      result += part.substring(i, i + 3);
    }
    return result;
  }



}
