import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { UsersService, User } from 'src/app/services/users.service';
import { PaymentModalComponent } from '../payment-modal/payment-modal.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  users$!: Observable<any>

  constructor(private usersService: UsersService, public dialog: MatDialog) { }
  @Input() user!: User
  @Output() openModal = new EventEmitter()



  clickModal() {
    this.openModal.emit();
  }
}
