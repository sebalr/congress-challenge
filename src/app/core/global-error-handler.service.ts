import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler {
  constructor() { }
  handleError(error) {
    console.log('From error handler:', error);
    throw error;
  }

}
