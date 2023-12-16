import { Component } from '@angular/core';
import { SerialService } from '../../serial.service';

@Component({
  selector: 'port-setting',
  standalone: true,
  imports: [],
  templateUrl: './port-setting.component.html',
  styleUrl: './port-setting.component.scss'
})
export class PortSettingComponent {
  constructor(
    private serialService: SerialService
  ) {

  }

  test(){
    this.serialService.getPorts();
  }
}
