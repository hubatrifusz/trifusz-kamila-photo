import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [ButtonComponent, HeaderComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
