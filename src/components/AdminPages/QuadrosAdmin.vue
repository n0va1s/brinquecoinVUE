<template>
  <div>
    <b-form @submit.prevent="onSubmit" @reset.prevent="onReset">
      <b-container fluid>
        <b-row>
          <b-col lg="4">
            <b-form-group id="input-quadro-1" label="Quadro:" label-for="input-quadro-1">
              <b-form-select
                id="input-quadro-1"
                v-model="quadro.tip_quadro"
                :options="quadroTypes"
                required
              />
            </b-form-group>
          </b-col>

          <b-col lg="5">
            <b-form-group id="input-quadro-2" label="Destinado:" label-for="input-quadro-2">
              <b-form-input
                id="input-quadro-2"
                v-model="quadro.nom_crianca"
                required
                placeholder="Para quem é este quadro..."
              />
            </b-form-group>
          </b-col>

          <b-col lg="3">
            <b-form-group id="input-quadro-3" label="Idade:" label-for="input-quadro-3">
              <b-form-input
                id="input-quadro-3"
                v-model="quadro.num_idade"
                required
                placeholder="Idade..."
              />
            </b-form-group>
          </b-col>

        </b-row>

          <b-row>
          <b-col lg="6">
            <b-form-group id="input-quadro-4" label="Recompensa:" label-for="input-quadro-4">
              <b-form-input
                id="input-quadro-4"
                v-model="quadro.des_recompensa"
                required
                placeholder="A recompensa deste quadro..."
              />
            </b-form-group>
          </b-col>

           <b-col lg="6">
            <b-form-group label="Imagem:" label-for="file">
                  <b-form-file id="file"
                  v-model="quadro.url_imagem"
                  accept="image/jpeg, image/png, image/gif"
                  placeholder="Escolha uma imagem..."
                  drop-placeholder="Solte aqui..."></b-form-file>
            </b-form-group>
          </b-col>
        </b-row>

        <b-button type="submit" variant="primary" v-if=" mode==='save'" class="mr-3 my-theme-blue">Salvar</b-button>
        <b-button type="submit" variant="danger" v-if=" mode==='remove'" class="mr-3">Excluir</b-button>
        <b-button type="reset" variant="secondary">Cancelar</b-button>

      </b-container>
    </b-form>

    <b-table responsive="md" striped hover :items="quadros" :fields="fields" class="mt-4">
      <template slot="actions" slot-scope="data">
        <b-button variant="primary" class="mr-2 mb-1 my-theme-blue" @click="carregaQuadro(data.item)">
          <i class="fa fa-pencil"></i>
        </b-button>
        <b-button variant="danger" class="mb-1" @click="carregaQuadro(data.item, 'remove')">
          <i class="fa fa-trash"></i>
        </b-button>
      </template>

    <template slot="atividades" slot-scope="data" >
        <div class="atividades">
          {{stringfyAtividades(data.item.atividades)}}
        </div>
          
    </template>

    </b-table>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "QuadrosAdmin",
  computed:mapState(['user']), //usuário logado
  data: function() {
    return {
      mode:"save",
      quadro: {},
      quadros: [],
      fields: [
        { key: "tip_quadro", label: "Tipo" },
        { key: "nom_crianca", label: "Para:" },
        { key: "atividades", label: "Atividades"},
        { key: "des_recompensa", label: "Recompensa" },
        { key: "actions", label: "Ações" }
      ],
      atividades: [],

      quadroTypes: [
        { text: "Tipo...", value: undefined },
        "Tarefas",
        "Exercícios",
        "Metas"
      ],
      quadroUsers: [
        { text: "Usuário...", value: undefined },
        { text: "João Paulo - joao@gmail.com", value: 1 },
        { text: "Joana Paula - joana@gmail.com", value: 2 },
        { text: "Lucas - lucas@gmail.com", value: 3 },
        { text: "Marcio - marcio@gmail.com", value: 4 }
      ]
    };
  },
  methods: {
  getQuadros(){ // pegar todos os quadros do backend e colocalos em "this.quadros" (com joint em usuários para pegar o nome de quem fez o quadro) <<<<<<<<<< 
                    //joint para atividades tmb, ou fazer a busca delas separadamente e depois atribuir em this.quadros <<<<<<<<
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
        {
          seq_quadro:2,
          seq_responsavel:3,
          author:"Pai 2",
          tip_quadro: "Exercícios",
          nom_crianca: "Joana Paula",
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
    getQuadrosByUserId(){ // buscar todos quadros que foram feitos pelo usuário logado (mesmo processo do de cima, mas com filtro pelo "sec_responsavel") <<<<<<<<
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
    onSubmit() { //fazer ação de salvar ou atualizar <<<<<<<<<<
      if(this.mode === 'save'){
        const quadro = { ...this.quadro };
        quadro.atividades = [...this.atividades];

        this.quadros.push(quadro);
      
      }
      if(this.mode === 'remove'){
        const quadros = [...this.quadros]
        const index = quadros.indexOf(this.quadro)
        quadros.splice(index,1)
        this.quadros = [...quadros]
      }
      this.onReset();
    },
    onReset() {// fazer ação de cancelar (zerar todos os campos) <<<<<<<
      this.quadro.seq_quadro = undefined;
      this.quadro.tip_quadro = undefined;
      this.quadro.seq_responsavel = undefined;
      this.quadro.author = undefined;
      this.quadro.nom_crianca = undefined;
      this.quadro.des_recompensa = "";
      this.quadro.atividades = [];
      this.atividades = [];
      this.mode = 'save'
    },

    carregaQuadro(quadro, mode = "save") { // traz o quadro selecionado para o estado da aplicação (para alterar ou excluir)
      this.mode = mode;
      this.quadro = { ...quadro };
    },

    stringfyAtividades(array){ // mostra as atividades de cada quadro na tabela
      let atividades = ''
      array.forEach(atividade => atividades = `${atividades}, ${atividade.nome}`)
      const atividadesFormatadas = atividades.substring(1, atividades.length);  
      return atividadesFormatadas
    }
  },

  mounted(){ // colocar aqui todas ações que devem ser feitas assim que a aplicação estiver montada (busca no banco de dados, principalmente)
    if(this.user.admin){
      this.getQuadros();
    }else{
      this.getQuadrosByUserId()
    }
    
  }
};
</script>

<style>

.atividades{
  max-width: 600px;
  height: 50px;
  
  overflow: hidden;

}

</style>