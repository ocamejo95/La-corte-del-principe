import { Component, OnInit } from '@angular/core';
import plato1 from '../../../../data/plato1.json';
import plato2 from '../../../../data/plato2.json';
import entrantes from '../../../../data/entrantes.json';
import bebidas from '../../../../data/bebidas.json';
import postres from '../../../../data/postres.json';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor() { }
  public plato1: { id: number }[] = plato1;
  public plato2: { id: number }[] = plato2;
  public entrantes: { id: number }[] = entrantes;
  public bebidas: { id: number }[] = bebidas;
  public postres: { id: number }[] = postres;

  ngOnInit(): void {
  }

}
