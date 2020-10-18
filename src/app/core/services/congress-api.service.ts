import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICongressMembersResponse, ICongressMembersResult } from 'src/app/shared/interfaces/congress-api-response.interface';
@Injectable({
  providedIn: 'root'
})
export class CongressApiService {

  private readonly apiUrl = 'https://api.propublica.org';
  constructor(private http: HttpClient) { }

  public getCongressMembers(congress: number, chamber: string): Observable<ICongressMembersResult> {
    return this.http.get<ICongressMembersResponse>(`${this.apiUrl}/congress/v1/${congress}/${chamber}/members.json`)
      .pipe(
        map(
          res => {
            if (res.status === 'OK') {
              return res.results[0];
            } else {
              throwError(new Error(res.status));
            }
          }
        )
      );
  }
}
