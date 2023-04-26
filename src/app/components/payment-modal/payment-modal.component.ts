import { Component, Inject } from '@angular/core';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PaymentService } from 'src/app/services/payment.service';
import { User } from 'src/app/services/users.service';
import { SnackbarComponent } from '../snackbar/snackbar.component';

@Component({
  selector: 'app-payment-modal',
  templateUrl: './payment-modal.component.html',
  styleUrls: ['./payment-modal.component.css']
})
export class PaymentModalComponent {



  paymentForm!: FormGroup
  subscribeCardForm!: FormGroup
  isCardAvailable = true
  cards = [{
    "card_number": "1111111111111111",
    "cvv": 789,
    "expiry_date": "01/18",
  }]


  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<PaymentModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private paymentService: PaymentService,
    private snackBar: MatSnackBar) {

  }

  ngOnInit() {
    console.log(this.data)
    this.paymentForm = this.fb.group({
      card: this.cards,
      "amount": null
    })
    console.log(this.paymentForm.get('card'))
  }

  subscribeCard() {
    this.isCardAvailable = false

    this.subscribeCardForm = this.fb.group({
      "card_number": [null, Validators.required],
      "cvv": [null, Validators.required],
      "expiry_date": [null, Validators.required],
      "amount": [null, Validators.required]
    })
  }
  subscribe() {
    if (this.subscribeCardForm.valid) {
      this.cards.push({
        "card_number": this.subscribeCardForm.get('card_number')?.value,
        "cvv": this.subscribeCardForm.get('cvv')?.value,
        "expiry_date": this.subscribeCardForm.get('expiry_date')?.value
      });
      this.isCardAvailable = true
    }

  }

  sendPayment() {
    const body = {
      "card_number": this.paymentForm.get('card')?.value['card_number'],
      "cvv": this.paymentForm.get('card')?.value.cvv,
      "expiry_date": this.paymentForm.get('card')?.value['expiry_date'],
      "destination_user_id": this.data.id,
      "value": this.paymentForm.get('amount')?.value
    }
    this.paymentService.payment(body).subscribe((res)=>{
     this.dialogRef.close()
     this.snackBar.openFromComponent(SnackbarComponent,{data:res, duration:800})
    });
  }


}
