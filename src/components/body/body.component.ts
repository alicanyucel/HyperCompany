import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Color } from 'src/enum/color.enum';
import { BoatClass } from 'src/models/boat.model';
import { Bus } from 'src/models/bus.model';
import { CarClass } from 'src/models/car.model';
import { GenericService } from 'src/services/generic.service';
import { SwalService } from 'src/services/swal.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  @ViewChild("addModelCloseBtn") addModalCloseBtn: ElementRef<HTMLButtonElement> | undefined;
  @ViewChild("updateModelCloseBtn") updateModalCloseBtn: ElementRef<HTMLButtonElement> | undefined;
  buses: Bus[] = [];
  boats:BoatClass[]=[];
  Cars:CarClass[]=[];
  colors:Color;
  createModelbus: Bus = new Bus();
  updateModelbus: Bus = new Bus();
  search: string = "";
  constructor(private http: GenericService, private swall: SwalService) { }
  ngOnInit(): void {
    this.getAll();
    this.swall.callToast("Deneme", "success");
  }
  add(form: NgForm) {
    if (form.valid) {
      this.http.post<string>("Buses/Create", this.createModelbus, (res) => {
        console.log(res);
        this.getAll();
        this.addModalCloseBtn?.nativeElement.click();
        this.createModelbus = new Bus();
      })
    }
  }
  getAll() {
    this.http.post<Bus[]>("Buses/GetAll", {}, (res) => {
      this.buses = res.data;
      console.log(this.buses);
    });
  }
  delete(id: string) {
    this.swall.calSwal("Delete bus?", `You want to delete?`, () => {
      this.http.post<string>("Buses/DeleteById", { id: id }, (res) => {
        this.swall.callToast(res.data, "info");
        this.getAll();
      })
    })
  }
  get(data: Bus) {
    this.updateModelbus = { ...data };
    this.updateModelbus.color = data.color;

  }
  update(form: NgForm) {
    if (form.valid) {
      this.http.post<string>("Buses/Update", this.updateModelbus, (res) => {
        this.swall.callToast(res.data, "success");
        this.getAll();
        this.updateModalCloseBtn?.nativeElement.click();
      });
    }
  }
}
