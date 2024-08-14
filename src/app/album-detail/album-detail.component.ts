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
  currentAlbum ?:Album;
  SongList?:List;


  isPlaying: boolean = false;
  progress: number = 0;
  currentSongIndex: number = 0;
  totalSongs: number = 0;
  intervalId?: number;
  constructor(private myService: AlbumService){}
  ngOnChanges(){
    if (this.selectedAlbumId) {
      this.currentAlbum=this.myService.getAllAlbum().find(param=>{
        return param.id==this.selectedAlbumId;
      })
      this.SongList=this.myService.getListSong().find(param=>{
        return param.id == this.selectedAlbumId;
      })
    }
  }
  playAlbum(): void {
    if (this.currentAlbum) {
      this.isPlaying = true;
      this.progress = 0;
      this.currentSongIndex = 0;
      this.totalSongs=this.SongList!.list.length;

      const totalDuration = this.currentAlbum.duration; // total duration in seconds
      const intervalDuration = totalDuration / 100; // 1% of the total duration

      this.intervalId = window.setInterval(() => {
        this.progress += 1;

        if (this.progress >= 100) {
          this.stopAlbum();
        } else if (this.progress % (100 / this.totalSongs) === 0) {
          this.currentSongIndex++;
        }
      }, intervalDuration * 1000); // converting interval duration to milliseconds
    }
  }

  stopAlbum(): void {
    this.isPlaying = false;
    this.progress = 0;
    this.currentSongIndex = 0;
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

}
