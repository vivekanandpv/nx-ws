import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { SharedComponent } from 'lib/shared/src/lib/shared/shared.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, SharedComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'frontend';
}
