import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  products=[
    {pimage:"https://m.media-amazon.com/images/I/61135j8fPJL._UF1000,1000_QL80_.jpg",pname:'Iphone',price:"100000"},
    {pimage:"https://m.media-amazon.com/images/I/61zj0hJQH2L._UF1000,1000_QL80_.jpg",pname:'IQ00',price:"50000"},
    {pimage:"https://www.91-img.com/gallery_images_uploads/9/d/9d2a8f19ef981e6c6481e5191455c32b74416822.jpg?tr=h-630,q-70",pname:'Samsung Galaxy',price:"50000"},
    {pimage:"https://images.samsung.com/is/image/samsung/p6pim/in/f2507/gallery/in-galaxy-z-fold7-f966-sm-f966bdbdins-thumb-547542963?$264_264_PNG$",pname:'S24',price:"50000"},
    {pimage:"https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1702983371711/7955f5b8de2146fe3c93e394880c055b.png",pname:'vivo',price:"40000"},
    {pimage:"https://5.imimg.com/data5/SELLER/Default/2021/9/DS/XI/YF/32162519/vivo-mobile-phone-500x500.jpeg",pname:'Redmi',price:"50000"},
    {pimage:"https://rukminim2.flixcart.com/image/240/240/xif0q/smartwatch/5/v/s/-original-imagxrhetgfuebnn.jpeg?q=60",pname:'Smart Watch',price:"3000"},
    {pimage:"https://rukminim2.flixcart.com/image/240/240/xif0q/monitor/i/e/2/va2708-2k-mhd-quad-hd-27-2024-va2708-2k-mhd-viewsonic-original-imahceybqxxazge5.jpeg?q=60",pname:'Monitor',price:"80000"},
    {pimage:"https://rukminim2.flixcart.com/image/240/240/xif0q/dslr-camera/8/q/r/compact-camera-portable-small-point-and-shoot-digital-camera-for-original-imahec6vcssf4hzg.jpeg?q=60",pname:'Camere',price:"90000"},
     
  ]

}
