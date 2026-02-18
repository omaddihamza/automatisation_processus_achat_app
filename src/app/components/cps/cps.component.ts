import { Component } from '@angular/core';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {TextareaModule} from 'primeng/textarea';
import {DatePickerModule} from 'primeng/datepicker';
import {FileUploadModule} from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-cps',
  imports: [CardModule, InputTextModule, TextareaModule, DatePickerModule, FileUploadModule, ToastModule, ButtonModule],
  templateUrl: './cps.component.html',
  styleUrl: './cps.component.css'
})
export class CpsComponent {

}
