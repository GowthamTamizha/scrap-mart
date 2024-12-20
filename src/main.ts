import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { LoginComponent } from './app/login/login.component'; // Starting with LoginComponent

bootstrapApplication(LoginComponent, {
  providers: [provideRouter(routes)],
});
