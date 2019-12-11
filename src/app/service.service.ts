import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class ServiceService {

  imgsrc1="https://www.greenbiz.com/sites/default/files/styles/gbz_article_primary_breakpoints_kalapicture_screen-md_1x/public/images/articles/featured/seedsnopparatpromthasstock.png?itok=Nc9XM6Ho&timestamp=1542669478";
  imgsrc2="https://earthjustice.org/sites/default/files/styles/image_800x600/public/seeds_shutterstock_JoHo.jpg?itok=dcwvxvpP";
  imgsrc3="https://www.duncraft.com/common/images/products/large/SeedofthemonthS_zoom.jpg"

  getone(){
    return [
      {id:11,name:"one year",price:365,image:this.imgsrc1},
      {id:12,name:"six months",price:183,image:this.imgsrc1},
      {id:13,name:"three months",price:95,image:this.imgsrc1}

    ]

  }

  constructor() { }
}
