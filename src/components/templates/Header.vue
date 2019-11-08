<template>
  <header class="header">
    <div class="header-background" v-if="user">

      <div class="header-img-background d-none d-md-block" >
        <router-link to="/">
          <img src="../../assets/logo.png" alt />
        </router-link>
      </div>

      <nav class="d-none d-sm-flex"  >
        <router-link to="/">Home</router-link>
        <router-link to="/admin">Criar Quadro</router-link>
        <router-link to="/quadros">Meus Quadros</router-link>
      </nav>

      <div class="toggle-menu d-block d-sm-none" >
        <b-dropdown
          size="md"
          variant="outline-warning"
          toggle-class="text-decoration-none"
          no-caret
        >
          <template v-slot:button-content>
            <i class="fa fa-bars"></i>
          </template>

          <b-dropdown-item href="/">
            <router-link to="/">Home</router-link>
          </b-dropdown-item>
          <b-dropdown-item href="/admin">
            <router-link to="/admin">Criar Quadro</router-link>
          </b-dropdown-item>
          <b-dropdown-item href="/quadros">
            <router-link to="/quadros">Meus Quadros</router-link>
          </b-dropdown-item>
        </b-dropdown>
      </div>

      <h1 >
        <router-link to="/" class="d-block d-sm-none">Brinque Coin</router-link>
      </h1>

      <UserOptions v-if="!hideUserOptions" />
    </div>

     <h1 v-if="!user">
       Brinque Coin
     </h1>

  </header>
</template>

<script>
import UserOptions from "./UserOptions";
import { mapState } from "vuex";

export default {
  name: "Header",
  components: { UserOptions },
  props: {
    hideUserOptions: Boolean
  },
  computed: mapState(["user"]),
  methods: {
    
  }
};
</script>

<style>
.header {
  grid-area: header;
  position: fixed;
  width: 100%;
  height: 80px;

  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;

   background: #F1912D;

}

.header h1{
  margin-top: 10px;
  color: #fff;
}

.header .header-background {
  position: absolute;
  top: 0;
  width: 100%;
  height: 80px;
 

  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
}

.header .header-background nav {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding-left: 30px;
}

.header .header-background nav a {
  font-size: 1.3rem;
  font-weight: bold;

  padding: 10px 20px;

  text-decoration: none;

  color: #fffa;
  background: transparent;

  transition: color 0.3s, background 0.3s;
}

.header .header-background nav a:hover {
  color: #fff;
  background: radial-gradient(#fff3 20%, #fff0 80%);
  transition: color 0.3s, background 0.3s;
}

.header .header-background h1 a {
  font-size: 1.8rem;
  color: #fff;
  text-decoration: none;
}
.header .header-background h1 a:hover {
  font-weight: bold;
}

.header .header-img-background {
  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: 20px;
}

.header .header-img-background img {
  height: 100px;
}

.header .header-img-background a:hover {
  filter: brightness(1.1);
}

.toggle-menu {
  margin-left: 10px;
  margin-bottom: 5px;

  font-size: 1.8rem;

  display: flex;
  justify-content: center;
  align-items: center;
}

.toggle-menu .dropdown-menu {
  background: #f47246bb;
  border-color: #ffc107;
}
.toggle-menu .dropdown-menu .dropdown-item a {
  text-decoration: none;
  font-size: 1.3rem;
  font-weight: bold;
  color: #fff;
}

.toggle-menu .dropdown-menu .dropdown-item:focus a {
  background: #fff;
  color: #f47246;
}


</style>