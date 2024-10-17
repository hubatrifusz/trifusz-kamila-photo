import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { ParagraphComponent } from "../../components/paragraph/paragraph.component";
import { PictureComponent } from "../../components/picture/picture.component";
import { LineComponent } from "../../components/line/line.component";
import { ButtonComponent } from "../../components/button/button.component";
import { CarouselComponent } from "../../components/carousel/carousel.component";

@Component({
  selector: 'page-index',
  standalone: true,
  imports: [HeaderComponent, ParagraphComponent, PictureComponent, LineComponent, ButtonComponent, CarouselComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

}
