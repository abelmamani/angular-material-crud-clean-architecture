import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BusRoutingModule } from './bus-routing.module';
import { BusComponent } from './bus.component';
import { BusDeleteDialogComponent, BusFormComponent, BusTableComponent } from './components';


@NgModule({
  declarations: [
    BusComponent,
    BusFormComponent,
    BusTableComponent,
    BusDeleteDialogComponent
  ],
  imports: [
    CommonModule,
    BusRoutingModule,
    ReactiveFormsModule,
    MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatSnackBarModule, MatTableModule, MatSortModule, MatPaginatorModule, MatIconModule
  ]
})
export class BusModule { }
