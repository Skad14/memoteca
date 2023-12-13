import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'Passo informações para o componente filho',
      autoria: 'Componente pai',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Minha propriedade é decorada com @Input()',
      autoria: 'Componente filho',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut malesuada tortor. Nulla semper rutrum nisi, a imperdiet lorem vulputate et. Quisque tempor nisl mollis orci auctor, vel vestibulum erat aliquam. Aenean rhoncus leo vitae est fringilla tincidunt. Aenean hendrerit, justo quis mollis maximus, tellus dui maximus lacus, a cursus sem leo quis mauris. Maecenas cursus volutpat dui, vitae tempus mi lacinia in. Vivamus rhoncus auctor lorem, at ornare dui mattis vel. Nulla vel tellus neque.',
      autoria: 'Lorem Ipsum',
      modelo: 'modelo1'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
