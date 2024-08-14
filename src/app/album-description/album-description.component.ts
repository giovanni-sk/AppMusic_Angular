import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../album.service';
import { Album } from '../album';
import { ALBUMS } from '../mock_album';

@Component({
  selector: 'app-album-description',
  templateUrl: './album-description.component.html',
  styleUrl: './album-description.component.css'
})
export class AlbumDescriptionComponent {
  albumId?: string;
  albumList?: Album[] ;
  albums:Album[]=ALBUMS;
  constructor(private route: ActivatedRoute, private myService:AlbumService) { }
ngOnInit():void{
  this.route.paramMap.subscribe(params => {
    this.albumId = params.get('id') || '';
this.albumList=this.albums.filter((e:Album)=>{
  return e.id==this.albumId;
  
  })
console.log(this.albumList);
  });
}
}
