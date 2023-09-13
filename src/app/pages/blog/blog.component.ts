import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  filterGroup!: FormGroup

  filterControl = new FormControl('')

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.buildForm()
  }

  private buildForm(): void {
    this.filterGroup = this.formBuilder.group({
      filterControl: new FormControl()
    })
  }

  imgs=[
    'https://ancbrasil.org.br/wp-content/uploads/2022/03/homem-feliz.jpg',
    'https://ancbrasil.org.br/wp-content/uploads/2022/03/mao-com-moedas.jpg',
    'https://ancbrasil.org.br/wp-content/uploads/2022/03/professora-e-aluna.jpg'
  ]

  contents = [
    'O projeto cultural FELIZCIDADE foi desenvolvido pela ANC para a valorização da cidadania com: cultura, lazer e entretenimento para o cidadão. Atrações Artísticas Bandas de PopRock Duplas Sertanejas Conjunto de Hip Hop CountryBreak Dance Rua Lazer Recreação Orientada Cama Elástica Futebol de Sabão Escorregador Lanches Palestras Motivacionais Palestrantes Nacionais Palestras para Servidores Palestras para Comunidade Palestras Sociedades Organizada Serviços Especializados',

    'O prazo para entrega da declaração do Imposto de Renda (IR) 2021 foi prorrogado para 31 de maio e ainda dá tempo de fazer doações a projetos sociais por meio da declaração. Para quem ainda não fez o envio, é possível doar parte do imposto devido para fundos sociais que destinam os recursos a organizações de todo o país. A',

    'CURSO MINISTRADO NA PREFEITURA DE GOIÂNIA-2016   Nome do Curso: Curso Excelência no Atendimento ao Cidadão  Carga Horária: 20 horas   Local: Sala de Aula/Auditório   Período: 4 ha/dia ou 8ha/dia   Quantidade de Módulos: 03 módulos   Quantidade de Vagas: até 100 vagas   METODOLOGIA Curso Presencial, com os seguintes recursos didáticos: Aulas expositivas: com teorias e conceitos; Estudos de casos; Dinâmica de grupo. '
  ]

  categories = [
    'Ação social',
    'Cursos',
    'Eventos',
    'Palestras'
  ]


}
