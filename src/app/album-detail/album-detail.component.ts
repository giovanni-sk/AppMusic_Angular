import { Component, Input } from '@angular/core';
import { AlbumService } from '../album.service';
import { Album, List } from '../album';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent {
  @Input () selectedAlbumId ?:string;
  currentAlbum ?:Album[];
  SongList?:List[];
  constructor(private myService: AlbumService){}
  ngOnChanges(){
    if (this.selectedAlbumId) {
      this.currentAlbum=this.myService.getAllAlbum().filter(param=>{
        return param.id==this.selectedAlbumId;
      })
      this.SongList=this.myService.getListSong().filter(param=>{
        return param.id == this.selectedAlbumId;
      })
    }
  }

}
