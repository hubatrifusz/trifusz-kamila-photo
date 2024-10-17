import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  standalone: true,
  imports: [],
  templateUrl: './paragraph.component.html',
  styleUrl: './paragraph.component.scss',
})
export class ParagraphComponent {
  @Input() text: string = '*placeholder*';
  @Input() fontSize!: number;
  @Input() fontFamily!: string;
  @Input() fontWeight!: number;
  @Input() fontStyle!: string;
}
