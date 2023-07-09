import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';
import { IPhoto } from 'src/app/shared/interfaces/photo.interface';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  public photoDetail: IPhoto | null = null;

  public isLoading: boolean = true;

  private _subscriptions = new Subscription;

  constructor(private readonly _route: ActivatedRoute, private readonly _apiService: ApiService) { }

  ngOnInit(): void {
    this._subscriptions.add(
      this._route.params.subscribe(params => {
        console.log("params: ", params);
        const photoId = params['id'];
        this.getPhotoDetailById(photoId);
      })
    );
  }

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }

  private getPhotoDetailById(photoId: number): void {
    this._apiService.getPhotoById(photoId)
      .subscribe({
        next: (response) => {
          this.photoDetail = response;
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => {
          this.isLoading = false;
        }
      });
  }
}

