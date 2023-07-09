import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { IPhoto } from 'src/app/shared/interfaces/photo.interface';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IPaginator } from 'src/app/shared/interfaces/paginator.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private readonly _http: HttpClient) { }

  public getPhotos(optionsPaginator: IPaginator): Observable<IPhoto[]> {

    const params = new HttpParams()
      .set('_page', optionsPaginator?.page ? optionsPaginator?.page : '1' )
      .set('_limit', optionsPaginator?.limit ? optionsPaginator?.limit : '5');

    return this._http.get<IPhoto[]>(`${environment.SERVER_URL}/photos`, {params});
  }

  public getPhotoById(photoId: number): Observable<IPhoto>{
    return this._http.get<IPhoto>(`${environment.SERVER_URL}/photos/${photoId}`);
  }
}
