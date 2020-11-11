import { Component, OnInit } from '@angular/core';
import { Medicine } from '../models/medicine';
import { MedicineService } from '../services/medicine.service';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css']
})
export class MedicineListComponent implements OnInit {
  medicines: Medicine[];

  constructor(private medicineSvc: MedicineService) { }

  ngOnInit() {
    this.getMedicines();
  }

  getMedicines() {
    this.medicineSvc.getMedicines()
      .subscribe( (response: Medicine[]) => {
        this.medicines = response;
      }, error => {
        console.log(error);
      });
  }

  editMedicines(medicine: Medicine){
  }
}
