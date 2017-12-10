import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div [ngClass]="theme">
      <form>
        <label for="theme">Choose Your Theme</label>
        <select name="theme" id="theme" (change)="onThemeSelected($event)">
          <option value="theme1">Theme 1</option>
          <option value="theme2">Theme 2</option>
        </select>
      </form>
      <p>Content:</p>
      <ul>
        <li>A</li>
        <li>B</li>
        <li>C</li>
      </ul>
    </div>
  `,
  styles: [``]
})
export class AppComponent {
  theme = 'theme1'

  onThemeSelected(e) {
    this.theme = e.target.value;
  }
}
