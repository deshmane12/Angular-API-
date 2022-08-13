import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { GeneralService } from '../general.service';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css'],

})
export class AddNewProductComponent implements OnInit {
  formBuilder: any;

  constructor(public fb: FormBuilder, private generalService: GeneralService) { }
  form = this.fb.group({
    pName: ['', Validators.required],
    pQuantity: ['', Validators.required],
    pImage: ['', Validators.required],
  });

  selectedFile: any;

  ngOnInit(): void { }

  async getBase64(file: any) {
    console.log(file);
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async (event: any) => {
      console.log(event);
      this.selectedFile = { name: file.name, content: event.target.result };
    };
    reader.onerror = function (error) {
    };
  }

  addProduct() {
    this.generalService.addProduct({ ...this.form.value, pImage: this.selectedFile });
  }

  fileSelect(event: any) {
    console.log('---->', this.getBase64(event.target.files[0]));
  }
}


