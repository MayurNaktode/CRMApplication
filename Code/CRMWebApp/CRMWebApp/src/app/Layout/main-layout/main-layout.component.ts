import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/UI/header/header.component';
import { SidemenuComponent } from '../../shared/UI/sidemenu/sidemenu.component';
import { FooterComponent } from '../../shared/UI/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidemenuComponent, FooterComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}
