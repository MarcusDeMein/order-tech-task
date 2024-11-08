import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Order } from './interface/oder.interface';
import { BehaviorSubject } from 'rxjs';
import { OrderFormComponent } from './order-form/order-form.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    MatDialogModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title  = "task"
  displayedColumns: string[] = ['name', 'quantity', 'price', 'total', 'delete'];
  orders$ = new BehaviorSubject<Order[]>([]);

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.loadOrders();
  }

  addOrder(order: Order) {
    const currentOrders = this.orders$.getValue();
    currentOrders.push(order);
    this.orders$.next(currentOrders);

    this.saveOrders();
  }

  deleteOrder(index: number) {
    const currentOrders = this.orders$.getValue();
    currentOrders.splice(index, 1);
    this.orders$.next(currentOrders);

    this.saveOrders();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(OrderFormComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addOrder(result);
      }
    });
  }

  saveOrders() {
    localStorage.setItem('orders', JSON.stringify(this.orders$.getValue()));
  }

  loadOrders() {
    const storedOrders = localStorage.getItem('orders');
    if (storedOrders) {
      const parsedOrders = JSON.parse(storedOrders);
      this.orders$.next(parsedOrders || []);
    }
  }
}