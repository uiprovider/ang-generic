import { Injectable } from '@angular/core';
import { environment } from '../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public siteUrl = environment.baseUrl;
  constructor() { }

  // Contacts Module api goes herecontacts 
  public contactsModule = {
    createContact: '/createContact',
    readContacts: '/readContacts',
    updateContact: '/updateContact',
    deleteContact: '/deleteContact'
  }

// User Module api goes herecontacts 
  public userModule = {
    createUser: '/createUser',
    readUser: '/readUser',
    updateUser: '/updateUser',
    deleteUser: '/deleteUser'
  }

}
