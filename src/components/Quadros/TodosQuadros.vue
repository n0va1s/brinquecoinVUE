<template>
    
    <div class="todos-quadros">

      <div class="descricao-pagina">
        
        <h5 class="text-muted" v-if="onlyView">Se gostar de algum quadro, basta clicar em "Duplicar" e criará um igual para você</h5>

        <h5 class="text-muted" v-if="seq_responsavel">Use o campo abaixo para filtrar seus quadros</h5>

      </div>

      <b-form @submit.prevent="pesquisar" @reset.prevent="limparBusca" v-if="!onlyView">

        <b-form-group id="input-quadros-1">
          <b-form-input
            id="input-quadros-1"
            v-model="filtro"
            required
            placeholder="Digite o filtro (nome, email, data ...)"
          />
        </b-form-group>

      <div class="buttons">
          <b-button type="submit" variant="primary" class="mr-3 my-theme-blue">Pesquisar</b-button>
          <b-button type="reset" variant="danger">Cancelar</b-button>
      </div>
        
      </b-form>      

      <div class="quadros">
        <div v-for="quadro in quadros" v-bind:key="quadro.seq_quadro">
          <QuadroCard :quadro="quadro" :onlyView="onlyView" />
        </div>
      </div>

      <div class="stats" v-if="!seq_responsavel">
        
          <span>
             <i class="fa fa-child"></i> 
             Crianças: {{this.caculaCrianças()}}
          </span>
          <span> 
            <i class="fa fa-male"></i> 
            <i class="fa fa-female"></i> 
            Pais: {{this.calculaPais()}}
          </span>
        
          <span> 
            <i class="fa fa-calendar"></i> 
            Quadros: {{this.calculaQuadros()}}
          </span>
          <span> 
            <i class="fa fa-list"></i> 
            Mais usado: {{this.calculaTipoMaisUsado()}}
          </span>
        
      </div>
      

    </div>

</template>

<script>

import QuadroCard from './QuadroCard'

export default {
  name: "TodosQuadros",
  props:{
    onlyView:Boolean, // true para coisas que serão mostradas na rome
    seq_responsavel:Number // se estiver setado, serão mostradas ações de alterações e exclusão
  },
  components: { QuadroCard },
  data: function() {
    return {
      filtro: "",
      quadros:[],
    };
  },
  methods: {
    getQuadros(){
     this.quadros = [
        { seq_quadro:1,
          seq_responsavel:1,
          author:"Lucas",
          tip_quadro: "Tarefas",
          nom_crianca: "João Paulo",
          url_imagem:"https://image.freepik.com/vetores-gratis/grupo-de-pessoas-fazendo-tarefas-domesticas-ilustradas_23-2148278715.jpg",
          atividades: [{ id: 1,
            nome: "Arrumar a Cama",
            segunda: "Feito",
            terca: "Feito",
            quarta: "Não Pôde",
            quinta: "Não Fez",
            sexta: "Feito",
            valor: 2
          },
          { 
            id:2,
            nome: "Escovar os Dentes",
            segunda: "Feito",
            terca: "Feito",
            quarta: "Não Pôde",
            quinta: "Feito",
            sexta: "Feito",
            valor: 2
          },
          {
            id:3,
            nome: "Preparar seu Café da Manhã",
            segunda: "Feito",
            terca: "Feito",
            quarta: "Não Pôde",
            quinta: "Feito",
            sexta: "Não Fez",
            valor: 2
          }],
          des_recompensa: 20
        }, // quadros vindos do banco de dados com um joint para informações de atividades
        {
          seq_quadro:2,
          seq_responsavel:3,
          author:"Pai 2",
          tip_quadro: "Exercícios",
          nom_crianca: "Joana Paula",
          url_imagem:"https://abrilsuperinteressante.files.wordpress.com/2019/04/limpeza.png",
          atividades: [{ id: 4, nome: "Sorrir mais",
            segunda: "Feito",
            terca: "Feito",
            quarta: "Não Pôde",
            quinta: "Feito",
            sexta: "Não Fez" }, 

            { id: 5, nome: "Sorrir mais",
            segunda: "Feito",
            terca: "Feito",
            quarta: "Não Pôde",
            quinta: "Feito",
            sexta: "Não Fez"}],
          des_recompensa: 30
        },
        { seq_quadro:3,
        seq_responsavel:2,
        author:"Pai 3",
          tip_quadro: "Tarefas",
          nom_crianca: "João Paulo",
          url_imagem:"https://abrilsaude.files.wordpress.com/2016/10/tarefas-domesticas-sem-estresse.jpg?quality=85&strip=info&w=1024",
          atividades: [{ id: 6, nome: "Sempre agradecer", 
            segunda: "Feito",
            terca: "Feito",
            quarta: "Não Pôde",
            quinta: "Não Fez",
            sexta: "Feito",
            valor: 2
          }],
          des_recompensa: 20
        }, // quadros vindos do banco de dados com um joint para informações de atividades
        { seq_quadro:4,
          seq_responsavel:1,
          author:"Lucas",
          tip_quadro: "Exercícios",
          nom_crianca: "Joana Paula",
          url_imagem:"https://abrilsaude.files.wordpress.com/2016/10/tarefas-domesticas-sem-estresse.jpg?quality=85&strip=info&w=1024",
          atividades: [{ id: 7, nome: "Sorrir mais", 
            segunda: "Feito",
            terca: "Feito",
            quarta: "Não Pôde",
            quinta: "Não Fez",
            sexta: "Feito",
            valor: 2
          }],
          des_recompensa: 30
        }
      ]
    },
    getQuadrosByUserId(){
            this.quadros = [
            { seq_quadro:1,
            seq_responsavel:1,
            author:"Lucas",
            tip_quadro: "Tarefas",
            nom_crianca: "João Paulo",
            url_imagem:"https://abrilsaude.files.wordpress.com/2016/10/tarefas-domesticas-sem-estresse.jpg?quality=85&strip=info&w=1024",
            atividades: [{ id: 1,
                nome: "Arrumar a Cama",
                segunda: "Feito",
                terca: "Feito",
                quarta: "Não Pôde",
                quinta: "Não Fez",
                sexta: "Feito",
                valor: 2
            },
            { 
                id:2,
                nome: "Escovar os Dentes",
                segunda: "Feito",
                terca: "Feito",
                quarta: "Não Pôde",
                quinta: "Feito",
                sexta: "Feito",
                valor: 2
            },
            {
                id:3,
                nome: "Preparar seu Café da Manhã",
                segunda: "Feito",
                terca: "Feito",
                quarta: "Não Pôde",
                quinta: "Feito",
                sexta: "Não Fez",
                valor: 2
            }],
            des_recompensa: 20
            },
            { seq_quadro:4,
            seq_responsavel:1,
            author:"Lucas",
            tip_quadro: "Exercícios",
            nom_crianca: "Joana Paula",
            url_imagem:"https://abrilsaude.files.wordpress.com/2016/10/tarefas-domesticas-sem-estresse.jpg?quality=85&strip=info&w=1024",
            atividades: [{ id: 7, nome: "Sorrir mais", 
                segunda: "Feito",
                terca: "Feito",
                quarta: "Não Pôde",
                quinta: "Não Fez",
                sexta: "Feito",
                valor: 2
            }],
            des_recompensa: 30
            }
            ]
        },
      pesquisar() {
        //Busca no banco pelo filtro
      },
      limparBusca() {
        this.filtro = "";
        this.alterar = null

        this.getQuadros()
        
      },
      abrirQuadro(quadro){
        const quadroClone = {...quadro}
        this.quadro = {...quadroClone}
      },
      selecionarAtividade(atividade){
        this.alterar = atividade.id

        this.atividade = {...atividade}
      },
      alterarAtividade(atividade){
        const atividadeClone = {...this.atividade}
        const index  = this.quadro.atividades.indexOf(atividade)
        this.quadro.atividades.splice(index, 1, atividadeClone);

        this.alterar= null
      },
    salvarQuadro(){
      const quadro = {...this.quadro}

     const quadros = this.quadros.filter(quad => quad.seq_quadro !== quadro.seq_quadro)

     quadros.unshift(quadro)

     this.quadros = [...quadros]

     this.quadro = {}
    },
    calculaPais(){
      const pais = this.quadros.map(quadro => quadro.seq_responsavel)
      const paisSemRepetir = pais.filter( (pai, index) => pais.indexOf(pai) === index)
      const qtdPais = paisSemRepetir.length
      return qtdPais

    },
    caculaCrianças(){
      const crianças = this.quadros.map(quadro => quadro.nom_crianca)
      const criançasSemRepetir = crianças.filter( (criança, index) => crianças.indexOf(criança) === index)
      const qtdCrianças = criançasSemRepetir.length
      return qtdCrianças
    },
    calculaQuadros(){
      const qtdQuadros = this.quadros.length
      return qtdQuadros

    },
    calculaTipoMaisUsado(){
        const types = {}

        let ultimaChave = ''
        this.quadros.forEach(quadro => types[quadro.tip_quadro] ? types[quadro.tip_quadro]+= 1 : types[quadro.tip_quadro] = 1)

        for (var chave in types) {
          if(types[ultimaChave]){
            if(types[chave] > types[ultimaChave]){
              ultimaChave = chave
            }
          }else{
              ultimaChave = chave
          }
          
        }

        const typeMaisUsado = ultimaChave
        return typeMaisUsado
    }
  },
  mounted(){
    if(this.userId){
      this.getQuadrosByUserId()
    }else{
      this.getQuadros()
    }
    
  }
};
</script>

<style>
.todos-quadros {
  padding: 20px;
  background-image: linear-gradient(to bottom, #F0F8FF, #F0F8FF00);

  box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
  min-height: 100vh;

}

.todos-quadros form input{
  text-align: center;
}

.todos-quadros form .buttons{
  display: flex;
  justify-content: center;
  align-items: center;
}


.quadros{
  border-radius: 10px;
  margin-top: 20px;
  padding: 20px 0;
  border:1px solid #ddd;

  display: flex;
  justify-content:center;
  align-items: flex-start;
  flex-wrap: wrap;

}

.stats{
  
  margin-top: 20px;
  min-height: 50px;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  font-size: 1.3rem;
}

.stats span{
  margin-top: 10px;
}

.descricao-pagina{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>