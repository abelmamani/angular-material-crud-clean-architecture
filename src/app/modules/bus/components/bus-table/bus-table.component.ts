import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Bus } from 'src/app/models/Bus';
import { BusService } from 'src/app/services/bus.service';
import { BusFormComponent } from '../bus-form';
import { BusDeleteDialogComponent } from '../bus-delete-dialog';

@Component({
  selector: 'app-bus-table',
  templateUrl: './bus-table.component.html',
  styleUrls: ['./bus-table.component.scss']
})
export class BusTableComponent implements OnInit,AfterViewInit{
  displayedColumns: string[] = ['id', 'licensePlate', 'brand', 'model', 'seats','update', 'delete'];
  public dataSource = new MatTableDataSource<Bus>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private busService: BusService, private dialog: MatDialog,  private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.getAllBuses();
  }
  getAllBuses(): void{
    this.busService.getAllBuses().subscribe((resp: Bus[]) => {
      this.dataSource.data = resp;
    });
  }

  
  
 

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  openBusDialog(busData?: Bus): void {
    const dialogRef = this.dialog.open(BusFormComponent);
    if (busData)
      dialogRef.componentInstance.busData = busData;
    
      
    dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.getAllBuses();
        }else{
          this.snackBar.open('Registro de autobús cancelado o fallido', 'Cerrar', {
            duration: 3000
          });
        }
      });
  }

  openConfirmDialog(bus: Bus): void {
    const dialogRef = this.dialog.open(BusDeleteDialogComponent);
    dialogRef.componentInstance.busData = bus;
  
    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.getAllBuses();
      }else{
        this.snackBar.open('Operacion Cancelada!', 'Cerrar', {
          duration: 3000
        });
      }
    });
  }

}
