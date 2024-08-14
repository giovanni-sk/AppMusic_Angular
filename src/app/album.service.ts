import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ALBUMS, ALBUM_LISTS } from './mock_album';
import { Album } from './album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private readonly pageSize = 2; // Nombre de musiques par page

  constructor() { }
//les observables sont utilisés pour avoir les resultats de maniere asynchone 
  getAlbums(page: number):Observable<Album[]>{
    
      const start = (page - 1) * this.pageSize;
      const end = start + this.pageSize;
      return of(ALBUMS.slice(start, end)); // Retourne une page de données  
  
  
  }
  getTotalPages(): number {
    return Math.ceil(ALBUMS.length / this.pageSize); // Calcule le nombre total de pages
  }
  getAllAlbum(){
    return ALBUMS;
  }
 getListSong(){
  return ALBUM_LISTS;
 }

}