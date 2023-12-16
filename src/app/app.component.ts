import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SerialService } from './serial.service';
import { PortSettingComponent } from './components/port-setting/port-setting.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,PortSettingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'web-serial';

  constructor(
    private serialService: SerialService
  ) {

  }

  search(){
    this.serialService.openPort();
  }
}
