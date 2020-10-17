import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CongressApiService } from 'src/app/core/services/congress-api.service';
import { ICongressMembersResult } from '../interfaces/congress-api-response.interface';

@Injectable({
  providedIn: 'root'
})
export class CongressMembersService {

  constructor(private apiService: CongressApiService) {
  }

  public getCongressMembers(congress: number, chamber: string): Observable<ICongressMembersResult> {
    return this.apiService.getCongressMembers(congress, chamber);
  }
}
