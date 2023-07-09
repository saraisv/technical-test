import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { IPaginator } from 'src/app/shared/interfaces/paginator.interface';
import { IPhoto } from 'src/app/shared/interfaces/photo.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public photos: IPhoto[] = [];

  public isLoading: boolean = false;

  private optionsPaginator: IPaginator = {
    page: 1,
    limit: 10,
  };

  constructor(private readonly _apiService: ApiService, private readonly _router: Router) { }

  ngOnInit(): void {
    this.getPhotos();
  }

  public goToDetail(idPhoto: number): void{
    console.log("go to: ", idPhoto)
    this._router.navigate([`/admin/detail/${idPhoto}`]);
  }

  public loadMore(): void {
    this.isLoading = true;
    this.optionsPaginator.page++;
    this.getPhotos()
  }

  private getPhotos(): void {
    this._apiService.getPhotos(this.optionsPaginator).subscribe({
      next: (response: IPhoto[]) => {
        this.photos = [...this.photos, ...response];
      },
      error: (error) => {
        console.error("Error loading more");
      }, 
      complete: () => {
        this.isLoading = false;
      }
    })
  }
}
