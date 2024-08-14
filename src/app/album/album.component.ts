import { Component, Input } from '@angular/core';
import { Album } from '../album';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrl: './album.component.css'
})
export class AlbumComponent {
AlbumList: Album[] = [];
currentPage: number = 1;
totalPages: number = 1;
pageNumbers?: number[];
selected ?:string;

constructor(private AlbumService: AlbumService){}

ngOnInit(): void {
  this.loadAlbumPage(this.currentPage);
}

loadAlbumPage(page: number): void {
  this.AlbumService.getAlbums(page).subscribe(data => {
    this.AlbumList = data;
    this.totalPages = this.AlbumService.getTotalPages();
    this.updatePageNumbers();
  });
}

goToPage(page: number): void {
  if (page >= 1 && page <= this.totalPages) {
    this.currentPage = page;
    this.loadAlbumPage(this.currentPage);
  }
}

nextPage(): void {
  if (this.currentPage < this.totalPages) {
    this.currentPage++;
    this.loadAlbumPage(this.currentPage);
  }
}

prevPage(): void {
  if (this.currentPage > 1) {
    this.currentPage--;
    this.loadAlbumPage(this.currentPage);
  }
}
updatePageNumbers():void{
  const range = 2;
  const start = Math.max(1, this.currentPage - range);
  const end = Math.min(this.totalPages, this.currentPage + range);
  this.pageNumbers = Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

toggleDetails(albumId: string): void {
  this.selected = albumId;
}

getInputSearch(element:string){
  console.log(element+'get');
  if (element.trim()!=='') {
    this.AlbumList=this.AlbumList.filter(e=>{
      console.log(e.title.toLowerCase().includes(element.toLowerCase()));
      
      return e.title.toLowerCase().includes(element.toLowerCase());
    })
  }else{
      this.loadAlbumPage(this.currentPage);
      console.log(this.currentPage);
      
  }
  
}
}