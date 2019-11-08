<template>
  <div>
    <b-form @submit.prevent="onSubmit" @reset.prevent="onReset">
      <b-container fluid>
        <b-row>
          <b-col lg="6">
            <b-form-group
              id="input-atividade-1"
              label="Quadro da Atividade:"
              label-for="input-atividade-1"
            >
              <b-form-select
                id="input-atividade-1"
                v-model="atividade.seq_quadro"
                :options="quadros"
                required
                @change="getAtividadesByQuadro"
              />
            </b-form-group>
          </b-col>
          <b-col  lg="6">
            <b-form-group
              id="input-atividade-2"
              label="Área da Atividade:"
              label-for="input-ativiade-2"
            >
              <b-form-select
                id="input-ativiade-2"
                v-model="atividade.ind_proposito"
                :options="propositos"
                required
              />
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col lg="6">
            <b-form-group
              id="input-atividade-3"
              label="Nome da Atividade:"
              label-for="input-atividade-3"
            >
              <b-form-input
                id="input-atividade-3"
                v-model="atividade.des_atividade"
                required
                placeholder="Ex:. Fazer uma tarefa doméstica..."
              />
            </b-form-group>
          </b-col>

          <b-col lg="6">
            <b-form-group
              id="input-atividade-4"
              label="Valor da Atividade:"
              label-for="input-atividade-4"
            >
              <b-form-input
                id="input-atividade-4"
                v-model="atividade.val_atividade"
                required
                placeholder="Exs:. 1, 2, 6 ..."
              />
            </b-form-group>
          </b-col>
        </b-row>

        <b-button type="submit" variant="primary" v-if=" mode==='save'" class="mr-3 my-theme-blue">Salvar</b-button>
        <b-button type="submit" variant="danger" v-if=" mode==='remove'" class="mr-3">Excluir</b-button>
        <b-button type="reset" variant="secondary">Cancelar</b-button>

      </b-container>
    </b-form>

    <b-table responsive="md" striped hover :items="atividadesSelecionadas" :fields="fields" class="mt-4">
      <template slot="actions" slot-scope="data">
        <b-button variant="primary" class="mr-2 mb-1 my-theme-blue" @click="carregaAtividade(data.item)">
          <i class="fa fa-pencil"></i>
        </b-button>
        <b-button variant="danger" class="mb-1" @click="carregaAtividade(data.item, 'remove')">
          <i class="fa fa-trash"></i>
        </b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name:"AtividadesAdmin",
  computed:mapState(['user']), //usuario logado
  data() {
    return {
      mode:"save",
      atividade: {},
      atividadesSelecionadas: [],
      atividades: [],
      fields: [
        { key: "seq_quadro", label: "Quadro" },
        { key: "ind_proposito", label: "Área" },
        { key: "des_atividade", label: "Nome" },
        { key: "val_atividade", label: "Valor" },
        { key: "actions", label: "Ações" }
      ],

      quadros: [
        { text: "Quadro...", value: undefined },
        { text: "Tarefas - João Paulo", value: 1 },
        { text: "Exercícios - Joana Paula", value: 4 }
      ],
      propositos: [
        { text: "Área...", value: undefined },
        "Refeição",
        "Casa",
        "Escola",
        "Higiene",
        "Comportamento"
      ]
    };
  },
  methods: {
    getAtividades(){ // buscar no banco de dados todas atividades <<<<<<<<<
      this.atividades = [{
          seq_quadro: 1,
          ind_proposito: "Casa",
          des_atividade: "Fazer uma tarefa Doméstica",
          val_atividade: 1
        },
        {
          seq_quadro: 1,
          ind_proposito: "Refeição",
          des_atividade: "Desafio: fruta, suco, legumes, verduras",
          val_atividade: 5
        },
        {
          seq_quadro: 2,
          ind_proposito: "Escola",
          des_atividade: "Estudar 2 horas por dia ou fazer a tarefa sem ninguem pedir",
          val_atividade: 2
        },
        {
          seq_quadro: 2,
          ind_proposito: "Higiene",
          des_atividade: "Escovar bem os dentes",
          val_atividade: 3
        },
        {
          seq_quadro: 2,
          ind_proposito: "Comportamento",
          des_atividade: "Comportar-se bem",
          val_atividade: 1
        }]

        this.atividadesSelecionadas = [...this.atividades]
    },
    getAtividadesByQuadroUserId(){ //buscar no banco de dados todas atividades pertencentes a quadros feitos pelo usuário logado <<<<<<<<<<
      this.atividades = [{
          seq_quadro: 1,
          ind_proposito: "Casa",
          des_atividade: "Fazer uma tarefa Doméstica",
          val_atividade: 1
        },
        {
          seq_quadro: 4,
          ind_proposito: "Comportamento",
          des_atividade: "Comportar-se bem",
          val_atividade: 1
        }]

        this.atividadesSelecionadas = [...this.atividades]
    },
    getQuadros(){ //buscar no banco de dados todos quadros <<<<<<<
     this.quadros = [
        { seq_quadro:1,
          seq_responsavel:1,
          author:"Lucas",
          tip_quadro: "Tarefas",
          nom_crianca: "João Paulo",
          num_idade:8,
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
        }, // quadros vindos do banco de dados com um joint para informações de atividades
        {
          seq_quadro:2,
          seq_responsavel:3,
          author:"Pai 2",
          tip_quadro: "Exercícios",
          nom_crianca: "Joana Paula",
          num_idade:10,
          url_imagem:"https://abrilsaude.files.wordpress.com/2016/10/tarefas-domesticas-sem-estresse.jpg?quality=85&strip=info&w=1024",
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
          num_idade:12,
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
    getQuadrosByUserId(){ //buscar no banco de dados todos quadros do usuario logado <<<<<<<
            this.quadros = [
            { seq_quadro:1,
            seq_responsavel:1,
            author:"Lucas",
            tip_quadro: "Tarefas",
            nom_crianca: "João Paulo",
            num_idade:9,
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
            num_idade:8,
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
    onSubmit() { //ação de salvar ou alterar <<<<<
      if(this.mode ==='save'){
        const atividade = { ...this.atividade };

        this.atividades.push(atividade);
      }

      if(this.mode ==='remove'){
        const atividades = [...this.atividades]
        const index = atividades.indexOf(this.atividade)
        atividades.splice(index,1)
        this.atividades = [...atividades]
      }
      
      this.onReset()
    },
    onReset() { // limpa todos os campos de atividade <<<<<<
      this.atividade.seq_quadro = undefined;
      this.atividade.des_atividade = "";
      this.atividade.val_atividade = "";
      this.atividade.ind_proposito = undefined;
      this.atividade.url_imagem = undefined;
      this.mode = 'save'
      this.getAtividadesByQuadro()
    },
      async getAtividadesByQuadro() { // quando o usuário seleciona em quadro, busca as atividades pertencentes a ele e coloca na tabela
       const ativiades = await [...this.atividades]

      if (this.atividade.seq_quadro) {
        const atividadesSelecionadas  = await ativiades.filter( atividade => atividade.seq_quadro === this.atividade.seq_quadro)

        this.atividadesSelecionadas =[...atividadesSelecionadas]

      } else {

        this.atividadesSelecionadas = [...ativiades]

      }
    },
    carregaAtividade(atividade, mode = "save") {
      this.mode = mode;
      this.atividade = { ...atividade };
    }
  },
  

  mounted(){ // colocar aqui todas ações que devem ser feitas assim que a aplicação estiver montada (busca no banco de dados, principalmente)
    if(this.user.admin){
      this.getAtividades();
    }else{
      this.getAtividadesByQuadroUserId()
    }
    
  }
};
</script>

<style>

</style>