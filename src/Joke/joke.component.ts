import { Component, Input } from '@angular/core';
import { Joke } from './joke';

@Component({
  selector: 'joke',
  template: `
<div class="card card-block" ccCardHover>
  <h4 class="card-title">{{data.setup}}</h4>
  <p class="card-text"
     [style.display]="'none'">{{data.punchline}}</p>
</div>
  `,
})
export class JokeComponent {
  @Input('joke') data!: Joke;
}
