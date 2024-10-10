import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TesteUmComponent } from './teste-um/teste-um.component';
import { LoginHeaderComponent } from './login-header/login-header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginButtonComponent } from './login-button/login-button.component';
import { LoginFooterComponent } from './login-footer/login-footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TesteUmComponent, LoginHeaderComponent, LoginButtonComponent, LoginFormComponent, LoginFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-Um';
}
