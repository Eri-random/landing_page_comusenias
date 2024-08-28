import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  public cards = [
    {
      title:'Diseño creativo',
      description:'Combina la funcionalidad con la estética de una manera única.Utiliza colores, tipografías y elementos visuales atractivos para crear una experiencia agradable para el usuario.',
      icon:'assets/check.svg'
    },
    {
      title:'Facil de usar',
      description:'La interfaz de usuario es intuitiva y fácil de navegar, lo que facilita a los usuarios aprender y practicar la lengua de señas de manera efectiva.',
      icon:'assets/check.svg'
    },
    {
      title:'Mejor experiencia de usuario',
      description:'Incorpora elementos visuales y recursos interactivos que hacen que el proceso de aprendizaje sea atractivo y memorable. La atención al detalle en el diseño refuerza la autenticidad de la aplicación y su compromiso con la accesibilidad.',
      icon:'assets/check.svg'
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
