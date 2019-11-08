<template>
  <div>

    <PageTitle icon="fa fa-calendar" :title=" `${this.quadro.tip_quadro} de ${this.quadro.nom_crianca}` " />

  <div class="quadro-aberto-img" :style=" `background-image: url(${this.quadro.url_imagem})` ">
    <div class="quadro-aberto">
        <div class="quadro-recompensa">
          <h3 class="d-none d-sm-block">{{this.quadro.nom_crianca}} completou {{this.pontos}} pontos dos {{this.total}}({{this.calculaPorcentagem()}}) para ganhar {{this.quadro.des_recompensa}}</h3>
          <h5 class="d-block d-sm-none">{{this.quadro.nom_crianca}} completou 12 pontos dos 48(20%) para ganhar uma bola</h5>
        </div>
          
        <b-table head-variant="dark" responsive="xl" :items="quadro.atividades" :fields="fieldsAtividade" class="my-table d-none d-lg-block"> 
          
          <template slot="segunda" slot-scope="data">
            <img :src="verificaStatus(data.item.segunda)" alt="Status"/>
            
          </template>

          <template slot="terca" slot-scope="data">
            <img :src="verificaStatus(data.item.terca)" alt="Status"/>
            
          </template>

          <template slot="quarta" slot-scope="data">
            <img :src="verificaStatus(data.item.quarta)" alt="Status"/>
            
          </template>

          <template slot="quinta" slot-scope="data">
            <img :src="verificaStatus(data.item.quinta)" alt="Status"/>
            
          </template>

          <template slot="sexta" slot-scope="data">
            <img :src="verificaStatus(data.item.sexta)" alt="Status"/>
            
          </template>

          <template slot="sabado" slot-scope="data">
            <img :src="verificaStatus(data.item.sabado)" alt="Status"/>
            
          </template>

          <template slot="domingo" slot-scope="data">
            <img :src="verificaStatus(data.item.domingo)" alt="Status"/>
            
          </template>
        </b-table>

        <div class="accordion mb-3 d-block d-lg-none" id="accordion">
            <div v-for="dia in semana" v-bind:key="dia" class="card">
                <div class="card-header" :id="`heading${dia}`">
                    
                        <button class="btn btn-dark"
                         type="button" 
                         data-toggle="collapse"
                        :data-target=" `#collapse${dia}`" 
                        :aria-expanded="dia === 'segunda' ? true : false" 
                        :aria-controls="`#collapse${dia}`">
                            {{dia}}
                        </button>
                    
                </div>

                <div :id="`collapse${dia}`" :class=" `collapse ${dia === 'segunda' ? 'show' : ''}` " :aria-labelledby="`heading${dia}`" data-parent="#accordion">
                    <div class="card-body">
                        <b-table :items="quadro.atividades" :fields="fieldsAccordion[dia]">
                            <template :slot="dia" slot-scope="data">

                              <img :src="verificaStatus(data.item[dia])" alt="Status"/>
            
                            </template>
                        </b-table>
                    </div>
                </div>

            </div>
        </div>
        
        <div class="buttons mt-2" v-if="!this.$route.query.onlyView">

          <b-button @click.prevent="onSubmit" variant="success"> Salvar </b-button>
          <b-button @click.prevent="onReset" variant="danger" > Cancelar </b-button>

        </div>

    </div>
</div>

    
  </div>
</template>

<script>

import feito from "../../assets/feito.png";
import naoFez from "../../assets/nao-fez.png";
import naoPode from "../../assets/nao-pode.png";

import PageTitle from '../templates/PageTitle'

export default {
    name:"QuadroById",
    components:{PageTitle},
    data:function(){
        return{
            status:{feito,naoFez,naoPode},
            pontos:0,
            total:0,
            quadro:{},
            quadros:[],
            semana:['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado', 'domingo'],
            fieldsAtividade: [
                { key: "nome", label: "Atividade" },
                { key: "segunda", label: "Segunda" },
                { key: "terca", label: "Terça" },
                { key: "quarta", label: "Quarta" },
                { key: "quinta", label: "Quinta" },
                { key: "sexta", label: "Sexta" },
                { key: "sabado", label: "Sábado" },
                { key: "domingo", label: "Domingo" },

            ],
            fieldsAccordion:{
                segunda: [{key:'nome', label:"Atividade"},{key:'segunda', label:"Status"}],
                terca: [{key:'nome', label:"Atividade"},{key:'terca', label:"Status"}],
                quarta: [{key:'nome', label:"Atividade"},{key:'quarta', label:"Status"}],
                quinta: [{key:'nome', label:"Atividade"},{key:'quinta', label:"Status"}],
                sexta: [{key:'nome', label:"Atividade"},{key:'sexta', label:"Status"}],
                sabado: [{key:'nome', label:"Atividade"},{key:'sabado', label:"Status"}],
                domingo: [{key:'nome', label:"Atividade"},{key:'domingo', label:"Status"}],
            }
        }
    },
    methods: {
      onSubmit(){ //salvar ou alterar no banco e voltar
        
        window.history.back()
      },
      onReset(){ //não salvar no banco, limpar campos, e voltar
        
        window.history.back()
      },
    getQuadros(){ // ação não necessária, apenas para simulação
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
            sabado:'Feito',
            domingo:'Não Pôde',
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
            sabado:'Feito',
            domingo:'Não Pôde',
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
            sabado:'Feito',
            domingo:'Não Pôde',
            valor: 2
          }],
          des_recompensa: 20
        }, 
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
            sexta: "Não Fez",
            sabado:'Feito',
            domingo:'Não Pôde'}, 

            { id: 5, nome: "Sorrir mais",
            segunda: "Feito",
            terca: "Feito",
            quarta: "Não Pôde",
            quinta: "Feito",
            sexta: "Não Fez",
            sabado:'Feito',
            domingo:'Não Pôde'}],
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
            sabado:'Feito',
            domingo:'Não Pôde',
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
            sabado:'Feito',
            domingo:'Não Pôde',
            valor: 2
          }],
          des_recompensa: 30
        }
      ]
    },
    getQuadroById(){ //buscar o quadro no banco pelo id passado na rota "this.$route.params.id"
        this.quadros.forEach(quadro => {
            if(quadro.seq_quadro === this.$route.params.id){
                this.quadro =  {...quadro}
            }
        })
    },
    calculaTotalEPontos(){
      let total = 0
      this.quadro.atividades.forEach(atividade => {
          total += atividade.valor
          this.verificaPontosFeitos(atividade)
      } )

      this.total = total * 7
    },
    verificaPontosFeitos(atividade){
      let pontos = 0
      const semana = ['segunda', 'terca', 'quarta', 'quinta','sexta', 'sabado','domingo']

      semana.forEach(dia => {
        if(atividade[dia] === 'Feito') pontos += atividade.valor
      })
      
      this.pontos = pontos

    },
    calculaPorcentagem(){ //porcentagem de atividades cumpridas na tarefa
        const resultado = `${Math.floor((this.pontos / this.total) * 100)}%` 
        return resultado
    },
    verificaStatus(status){ //ação que retornar emojis
      if(status === 'Feito'){

        return this.status.feito

      } else if(status === 'Não Fez') {

        return this.status.naoFez

      } else if(status === "Não Pôde"){
        return this.status.naoPode
      } else{
        return null
      }   
    }
    },
    mounted(){ //colocar aqui todas ações que devem ser feitas assim que a aplicação estiver montada (busca no banco de dados, principalmente)
        this.getQuadros()
        this.getQuadroById()
        this.calculaTotalEPontos()
    }
}
</script>

<style>

.quadro-aberto-img{

    background-size: 260px;
    
}

.quadro-aberto{
  background: rgba(255, 255, 255, 0.7);

  padding: 20px;

  box-shadow: 0px 0px 10px rgba(0,0,0,0.2);

  min-height: 100vh;
}

.quadro-aberto .buttons{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.quadro-aberto .buttons button{
  min-width: 45%;
}

.accordion .card{
  margin-bottom: 5px;
  
  border-radius: 5px;
}

.accordion .card .card-header{
    padding: 0;
    border-radius: 5px;
}

.accordion .card .card-body{
  padding: 0;
}

.accordion .card .card-header button{
    width: 100%;
}



</style>