<template>
  <div>
    <b-form @submit.prevent="onSubmit" @reset.prevent="onReset">
      <b-container fluid>
        <b-row>
          <b-col lg="6">
            <b-form-group id="input-user-1" label="Nome:" label-for="input-user-1">
              <b-form-input
                id="input-user-1"
                v-model="user.nome"
                required
                placeholder="Seu nome..."
              ></b-form-input>
            </b-form-group>
          </b-col>

          <b-col lg="6">
            <b-form-group id="input-user-2" label="E-mail:" label-for="input-user-2">
              <b-form-input
                id="input-user-2"
                v-model="user.email"
                type="email"
                required
                placeholder="Ex:. seuemail@gmail.com"
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row class="mb-3">
          <b-col>
              <b-form-checkbox
                id="checkbox-1"
                v-model="user.admin"
                name="checkbox-1"
                :value="false"
                :unchecked-value="true">
                Administrador ?
              </b-form-checkbox>
          </b-col>
          
        </b-row>

        

        <b-row>
            <b-col lg="6">
            <b-form-group id="input-user-3" label="Senha:" label-for="input-user-3">
              <b-form-input
                id="input-user-3"
                v-model="user.senha"
                type="password"
                required
                placeholder="Sua Senha..."
              ></b-form-input>
            </b-form-group>
          </b-col>

          <b-col lg="6">
            <b-form-group id="input-user-4" label="Confirmação de Senha:" label-for="input-user-4">
              <b-form-input
                id="input-user-4"
                v-model="user.confirmacaoDeSenha"
                type="password"
                required
                placeholder="Confirme sua Senha..."
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <b-button type="submit" variant="primary" v-if=" mode==='save'" class="mr-3 my-theme-blue">Salvar</b-button>
        <b-button type="submit" variant="danger" v-if=" mode==='remove'" class="mr-3">Excluir</b-button>
        <b-button type="reset" variant="secondary">Cancelar</b-button>
      </b-container>
    </b-form>

    <b-table responsive="md" striped hover :items="users" :fields="fields" class="mt-4">
      <template slot="actions" slot-scope="data">
        <b-button variant="primary" class="mr-2 mb-1 my-theme-blue" @click="carregaUsuario(data.item)">
          <i class="fa fa-pencil"></i>
        </b-button>
        <b-button variant="danger" class="mb-1" @click="carregaUsuario(data.item, 'remove')">
          <i class="fa fa-trash"></i>
        </b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mode:"save",
      user: {},
      users: [],
      fields: [
        { key: "id", label: "Id" },
        { key: "nome", label: "Nome" },
        { key: "email", label: "E-mail" },
        { key: "idade", label: "Idade" },
        {
          key: "admin",
          label: "Administrador",
          formatter: value => (value ? "Sim" : "Não")
        },
        { key: "actions", label: "Ações" }
      ]
    };
  },
  methods: {
    getUsers(){ //busar todos usuarios no banco de dados <<<<<<<<<
      this.users = [{
          id: 1,
          nome: "João Paulo",
          email: "joao@gmail.com",
          idade: 22,
          admin: true
        },
        {
          id: 2,
          nome: "Joana Paula",
          email: "joana@gmail.com",
          idade: 10,
          admin: false
        },
        {
          id: 3,
          nome: "Lucas",
          email: "lucas@gmail.com",
          idade: 9,
          admin: false
        },
        {
          id: 4,
          nome: "Marcio",
          email: "marcio@gmail.com",
          idade: 9,
          admin: false
        }]
    },
    onSubmit() { // ação de salvar ou atuaizar <<<<<<<
      if(this.mode==='save'){
        const user = { ...this.user };

        this.users.push(user)
      }

      if(this.mode==='remove'){
        const users = [...this.users]
        const index = users.indexOf(this.user)
        users.splice(index,1)
        this.users = [...users]
      }

      this.onReset()
      
    },
    onReset() { //limpar todos campos de usuário
      this.user.email = "";
      this.user.nome = "";
      this.user.senha = '';
      this.user.confirmacaoDeSenha = '';
      this.mode = 'save'
    },
    carregaUsuario(user, mode = "save") { //carrega o usuario no estado da aplicação(campos)
      this.mode = mode;
      this.user = { ...user };
    }
  },
  mounted(){ //colocar aqui todas ações que devem ser feitas assim que a aplicação estiver montada (busca no banco de dados, principalmente)
    this.getUsers();
  }
};
</script>

<style>
</style>