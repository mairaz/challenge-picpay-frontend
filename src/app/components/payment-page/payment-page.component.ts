import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PaymentModalComponent } from '../payment-modal/payment-modal.component';
import { UsersService, User } from 'src/app/services/users.service';


@Component({
  selector: 'app-root',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent {
  users$!: Observable<any>

  constructor(
    private usersService: UsersService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.users$ = this.usersService.getUsers()
  }

  openPaymentModal(user: User) {
    this.dialog.open(PaymentModalComponent, {
      width: '600px',
      height: '400px',
      data: user
    })

  }
}
