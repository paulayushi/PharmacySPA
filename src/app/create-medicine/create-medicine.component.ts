import { Component, OnInit } from '@angular/core';
import { Medicine } from '../models/medicine';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-medicine',
  templateUrl: './create-medicine.component.html',
  styleUrls: ['./create-medicine.component.css']
})
export class CreateMedicineComponent implements OnInit {
  model: Medicine;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

}
