import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Bus } from 'src/app/models';
import { BusService } from 'src/app/services';

@Component({
  selector: 'app-bus-delete-dialog',
  templateUrl: './bus-delete-dialog.component.html',
  styleUrls: ['./bus-delete-dialog.component.scss']
})
export class BusDeleteDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<BusDeleteDialogComponent>,
    private busService: BusService,
    private snackBar: MatSnackBar){}
  @Input() busData!: Bus;
  onCancel(): void {
    this.dialogRef.close(false);
  }

  onDelete(): void {
    this.busService.deleteBus(this.busData.id).subscribe(
      (response: Bus) => {
        this.snackBar.open('Autobús Eliminado! ' + response.licensePlate, 'Cerrar', {
          duration: 3000
        });
        this.dialogRef.close(true); // Cerrar diálogo con éxito
      },
      error => {
        
        this.snackBar.open('Error al registrar el autobús', 'Cerrar', {
          duration: 3000
        });
      }
    );
  }
}
