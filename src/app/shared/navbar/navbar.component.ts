import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  activeSection: string = '';

  public sidebarItems = [
    {label:'Nuestra App',url:'#nuestraApp'},
    {label:'Sobre nosotros', url:'#nosotros'},
    {label:'Funcionamiento', url:'#funcionamiento'},
    {label:'Contacto', url:'#contacto'},
  ];

  constructor() { }

  ngOnInit(): void {
  }


}
