import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { Order } from '../interface/oder.interface';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';


@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [
    MatDialogModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule],
  templateUrl: './order-form.component.html',
  styleUrl: './order-form.component.css'
})

export class OrderFormComponent {
  orderName: string = '';
  orderQuantity: number = 0;
  orderPrice: number = 0;

  constructor(
    public dialogRef: MatDialogRef<OrderFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any 
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveOrder(): void {
    if (this.orderName && this.orderQuantity > 0 && this.orderPrice > 0) {
      const newOrder: Order = {
        name: this.orderName,
        quantity: this.orderQuantity,
        price: this.orderPrice
      };
      this.dialogRef.close(newOrder);
    }
  }
}
