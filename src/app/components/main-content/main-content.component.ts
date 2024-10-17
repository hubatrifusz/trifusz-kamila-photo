import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { HeaderComponent } from "../header/header.component";
import { ParagraphComponent } from '../paragraph/paragraph.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [ButtonComponent, HeaderComponent, ParagraphComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {}
