import { Observable } from 'rxjs';
import { User, UsersService } from './services/users.service';
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PaymentModalComponent } from './components/payment-modal/payment-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
