<template>
  <div class="auth-content">

    <div class="auth-back-image">
      
    

      <div class="auth-modal">
        
        <div class="auth-title">{{showSignup ? 'CADASTRO' : 'LOGIN'}}</div>

        <hr />

        <input v-model="user.nome" type="text" placeholder="Nome" v-if="showSignup"/>

        <input v-model="user.email" type="text" name="email" placeholder="Email" />
        <input v-model="user.senha" type="password" name="senha" placeholder="Senha" />

        <input
          v-if="showSignup"
          v-model="user.confirmacaoDeSenha"
          type="password"
          name="password"
          placeholder="Confirmar Senha"
        />

        <button v-if="showSignup" @click="signup">Registrar</button>
        <button v-else @click="signin">Entrar</button>

        <a href @click.prevent="showSignup = !showSignup">
          <span v-if="showSignup">Ir para Login</span>
          <span v-else>Registrar-se</span>
        </a>
        
      </div>

    </div>
    

  </div>
</template>

<script>
// import { baseApiUrl, showError, userKey } from "@/global";
import {userKey } from "@/global";
// import axios from "axios";

export default {
  name: "Auth",
  data: function() {
    return {
      showSignup: false,
      user: {}
    };
  },

  methods: {
    signin() { //fazer ação de logar o usuário <<<<<<<<
      // axios.post(`${baseApiUrl}/signin`, this.user)
      //     .then(res =>{
      if (this.user.email) {

        this.$store.commit("setUser", this.user);
        localStorage.setItem(userKey, JSON.stringify(this.user))
        this.$router.push({ path: "/" });
      }

      

      // })
      // .catch(showError)
    },
    signup() { //fazer ação de registrar usuário <<<<<<
    //   axios
    //     .post(`${baseApiUrl}/signup`, this.user)
    //     .then(() => {
          this.$toasted.global.defaultSuccess();
          this.user = {};
          this.showSignup = false;
    //     })
    //     .catch(showError);
    },
   
  }
};
</script>

<style>
.auth-content {
  background-image: url('../../assets/logo.png');

  background-repeat: repeat-x;
  background-position: center;

  height: 100%;

}

.auth-back-image{
  background: rgba(255,255,255,0.4);

  height: 100%;
  

  display: flex;  
  justify-content: center;
  align-items: center;
  
}

.auth-content img{
  min-width: 400px;
  opacity: 0.65;
}

.auth-modal {
  background-color: #fff;
  width: 400px;
  min-height: 400px;
  padding: 35px;
  box-shadow: 0 2px 5px rgba(244, 107, 69, 0.4);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.auth-modal input {
  border: 1px solid #bbb;
  width: 100%;
  margin-bottom: 15px;
  padding: 3px 8px;

  outline: 0;
}

.auth-modal button {
  align-self: flex-end;
  padding: 5px 15px;
  background-color: rgb(244, 107, 69);

  font-size: 1.3rem;
  font-weight: bold;
  color: #fff;

  cursor: pointer;

  border: 0;
  outline: 0;
}

.auth-modal button:hover {
  background-image: linear-gradient(
    to top,
    rgb(244, 137, 109),
    rgb(244, 107, 69)
  );
}

.auth-modal a {
  margin-top: 35px;
  color: rgb(244, 107, 69);

  font-size: 1.3rem;

  text-decoration: none;
}

.auth-modal hr {
  border: 0;
  width: 100%;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(120, 120, 120, 0),
    rgba(120, 120, 120, 0.75),
    rgba(120, 120, 120, 0)
  );
}

.auth-title {
  font-size: 1.7rem;
  font-weight: 100;
  color: #777;
  margin-top: 10px;
  margin-bottom: 15px;
}

</style>