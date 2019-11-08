<template>
  <div id="app">
    <Header :hideUserOptions="!user" />
    <Content />
    <Footer />
  </div>
</template>

<script>
// import axios from 'axios'
// import { baseApiUrl, userKey } from '@/global'
import {userKey } from '@/global'

import Header from "./components/templates/Header";
import Content from "./components/templates/Content";
import Footer from "./components/templates/Footer";

import { mapState } from "vuex";

export default {
  name: "app",

  components: {
    Header,
    Content,
    Footer,
  },

  computed: mapState(["user"]),

  created(){
    const json = localStorage.getItem(userKey)
    const userData = JSON.parse(json)

    if(userData){
      this.$store.commit('setUser', userData)
      this.$router.push({ name: "home" });
    }else{
      this.$router.push({ name: "auth" });
    }

    

  }
};
</script>

<style>
* {
  font-family: "Handlee", cursive, sans-serif;
}

body {

  background: #fff;
  margin: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  height: 100vh;

  display: grid;
  grid-template-rows: 80px 1fr 35px;
  grid-template-columns: 130px 1fr;
  grid-template-areas:
    "header header"
    "content content"
    "footer footer";
}

#app hr{
   border: 0;
        width: 100%;
        height: 1px;
        background-image: linear-gradient(to right,
            rgba(120,120,120, 0),
            rgba(120,120,120, 0.75),
            rgba(120,120,120, 0));
}


.my-table{
    background-color: rgba(255, 255, 255,0.9);

    text-align: center;

    font-size: 1.3rem;

    border-radius: 10px;

    box-shadow: 0 3px 15px rgba(0,0,0,0.2);
    
}

.my-table tbody tr td div{
  font-size: 1rem;
}

.my-theme-blue{
  background: #68C3D8 !important;
  border-color: #68C3D8 !important;
}


</style>
