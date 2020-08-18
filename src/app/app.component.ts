import { Component, InjectionToken, Optional, Inject } from '@angular/core';

export const SomeInjectionToken = new InjectionToken<AAA>('HostEnvironment');

export const enum AAA {
  S = 1,
  D = 3
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    @Optional() @Inject(SomeInjectionToken) p: AAA
  ) {
    console.log(p);
  }
  title = 'injectEnumBug';
}
