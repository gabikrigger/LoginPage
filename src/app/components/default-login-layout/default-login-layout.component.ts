import {Component, Input, input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-default-login-layout',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './default-login-layout.component.html',
  styleUrl: './default-login-layout.component.scss'
})
export class DefaultLoginLayoutComponent {
  @Input() title = '';
  @Input() primaryButtonText = '';
  @Input() secondaryButtonText = '';
}
