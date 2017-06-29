import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';
import { Contact } from './contact.interfaces';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  private _contact: Contact;

  constructor(private contactService: ContactService) {
    contactService.getData().subscribe( (contact) => this._contact = contact )
  }

  ngOnInit() {
  }

  get contact(): Contact {
    return this._contact;
  }

}
