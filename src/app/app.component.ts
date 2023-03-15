import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ServicesService } from "./services.service";

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title mx-auto">Message Sent!</h4>
      <i class="fa fa-close float-right" style="font-size:30px; color:red; cursor:pointer;" (click)="activeModal.dismiss('Cross click')"></i>
    </div>
    <div class="modal-body">
      <p class="text-center">I'll get back to you as soon as I can. Thank you!</p>
    </div>
    <div class="modal-footer d-flex justify-content-center">
      <div type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</div>
    </div>
  `,
  styles: ['']
})

export class NgbdModalContent {
  //   @Input() name: any;

  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(private modalService: NgbModal, private service: ServicesService) {}

  bikerForm = new FormGroup({
    access_key: new FormControl('0ac62f72-5723-4502-a778-d476e079d14a'),
    Name: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern('^[a-zA-Z ]*$')]),
    Color: new FormControl('', [Validators.required]),
    Miles: new FormControl('', [Validators.required]),
    Helmet: new FormControl('', [Validators.required]),
    Message: new FormControl('', [Validators.required, Validators.maxLength(3000)])
  });

  get Name() {
    return this.bikerForm.get('Name');
  }

  get Color() {
    return this.bikerForm.get('Color');
  }

  get Miles() {
    return this.bikerForm.get('Miles');
  }

  get Helmet() {
    return this.bikerForm.get('Helmet');
  }

  get Message() {
    return this.bikerForm.get('Message');
  }

  onSubmit() {
    this.service.saveMessage(this.bikerForm.value).subscribe(response =>{
      this.bikerForm.reset();
      this.modalService.open(NgbdModalContent);
    })
  }
}
