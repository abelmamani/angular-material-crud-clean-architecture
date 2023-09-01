import { Component, Input, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Bus } from 'src/app/models';
import { BusService } from 'src/app/services';


@Component({
  selector: 'app-bus-form',
  templateUrl: './bus-form.component.html',
  styleUrls: ['./bus-form.component.scss']
})
export class BusFormComponent implements OnInit{
  busForm: FormGroup;
  @Input() busData: Bus = { // Inicializar con valores predeterminados
    id: 0,
    licensePlate: '',
    brand: '',
    model: '',
    seats: 0
  };

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<BusFormComponent>,
    private snackBar: MatSnackBar,
    private busService: BusService,
    
  ) {
    this.busForm = this.formBuilder.group({
      licensePlate: ['', Validators.required],
      brand: ['', Validators.required],
      model: ['', Validators.required],
      seats: ['', Validators.required]
    });
 
    
  }

  ngOnInit(): void {
    if (this.busData.id != 0) {
      this.busForm.patchValue({
        licensePlate: this.busData.licensePlate,
        brand: this.busData.brand,
        model: this.busData.model,
        seats: this.busData.seats
      });
    }
  }
  
  onSave(): void {
      if (this.busForm.valid) {
        const newBus: Bus = this.busForm.value;
        if (this.busData.id == 0) {
        this.busService.addBus(newBus).subscribe(
          (response: Bus) => {
            this.snackBar.open('Autobús registrado exitosamente' + response.licensePlate, 'Cerrar', {
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
    }else{
      newBus.id = this.busData.id;
      this.busService.updateBus(newBus).subscribe(
          () => {
            this.snackBar.open('Autobús actualizado exitosamente', 'Cerrar', {
              duration: 3000
            });
            this.dialogRef.close(true);
          },
          error => {
            console.log(error);
            this.snackBar.open('Error al actualizar el autobús', 'Cerrar', {
              duration: 3000
            });
          }
        );
    }
   } else {
      this.snackBar.open('Por favor, completa todos los campos', 'Cerrar', {
        duration: 3000
      });
    }
  
  }
}
