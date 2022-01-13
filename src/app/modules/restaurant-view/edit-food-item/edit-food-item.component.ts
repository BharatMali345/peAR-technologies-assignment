import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FoodItemModel } from './model/food-item.model';

@Component({
  selector: 'edit-food-item',
  templateUrl: './edit-food-item.component.html',
  styleUrls: ['./edit-food-item.component.scss'],
})
export class EditFoodItemComponent implements OnInit {
  //Input
  @Input() Data: FoodItemModel = {} as FoodItemModel;

  //Outputs
  @Output() onBtnClicked: EventEmitter<any> = new EventEmitter();

  //Models
  editModel: FoodItemModel = {} as FoodItemModel;

  //Variables
  editForm: any;
  loading: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  ngOnChanges() {
    this.loading = true;
    if (this.Data) {
      this.editModel = this.Data;
      this.dataBinding(this.Data);
    }
  }

  // Data Binding
  dataBinding(data: FoodItemModel) {
    this.editForm = this.formBuilder.group({
      _id: new FormControl(data._id),
      AR: new FormControl(data.AR),
      AcPrice: new FormControl(data.AcPrice, Validators.required),
      Best_seller: new FormControl(data.Best_seller),
      Chefs_special: new FormControl(data.Chefs_special),
      Description: new FormControl(data.Description, Validators.required),
      Gluten_free: new FormControl(data.Gluten_free),
      Live: new FormControl(data.Live),
      Name: new FormControl(data.Name, Validators.required),
      Price: new FormControl(data.Price, Validators.required),
      Seasonal: new FormControl(data.Seasonal),
      Vegan: new FormControl(data.Vegan),
      gst: new FormControl(data.gst, Validators.required),
      item_image: new FormControl(data.item_image),
      item_type: new FormControl(data.item_type),
      model_android: new FormControl(data.model_android),
      model_ios: new FormControl(data.model_ios),
      nor: new FormControl(data.nor),
      rating: new FormControl(data.rating),
      serving_time: new FormControl(data.serving_time),
      vat: new FormControl(data.vat),
      Customisation: this.formBuilder.array([]),
    });
    if (data.Customisation.length > 0) {
      //Add data to customisation
      data.Customisation.forEach((i: any, index: number) => {
        this.Customisation().push(
          this.formBuilder.group({
            _id: i?._id,
            Live: i?.Live,
            Name: i?.Name,
            max: i?.max,
            min: i?.min,
            Options: this.formBuilder.array([]),
          })
        );
        if (i.Options.length > 0) {
          //Add data to options
          i.Options.forEach((j: any) => {
            this.Options(index).push(
              this.formBuilder.group({
                _id: j?._id,
                Live: j?.Live,
                Name: j?.Name,
                Price: j?.Price,
                option_type: j?.option_type,
              })
            );
          });
        }
      });
    }
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  getControl(address: FormGroup, controlName: string) {
    return address.get(controlName) as FormControl;
  }

  createCustomisation(): FormGroup {
    return this.formBuilder.group({
      _id: '',
      Live: '',
      Name: '',
      max: '',
      min: '',
      Options: this.formBuilder.array([]),
    });
  }

  Customisation(): FormArray {
    return this.editForm.get('Customisation') as FormArray;
  }

  addCustomisation(): void {
    this.loading = true;
    this.Customisation().push(this.createCustomisation());
    this.loading = false;
  }

  removeCustomisation(index: number) {
    this.loading = true;
    this.Customisation().removeAt(index);
    this.loading = false;
  }

  createOptions(): FormGroup {
    return this.formBuilder.group({
      _id: '',
      Live: '',
      Name: '',
      Price: '',
      option_type: '',
    });
  }

  Options(index: number) {
    return this.Customisation().at(index).get('Options') as FormArray;
  }

  addOptions(index: number) {
    this.loading = true;
    this.Options(index).push(this.createOptions());
    this.loading = false;
  }

  removeOptions(index: number, optIndex: number) {
    this.loading = true;
    this.Options(index).removeAt(optIndex);
    this.loading = false;
  }

  submit() {
    console.log(this.editForm.value);
    this.onBtnClicked.emit('customize');
  }
}
