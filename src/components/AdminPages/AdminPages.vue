<template>
<div class="admin-pages">
  <PageTitle icon="fa fa-cogs" title="Administração" />

    <b-card no-body>
      <b-tabs pills card>
        <b-tab title="Quadros" active>
            <QuadrosAdmin />
        </b-tab>
        <b-tab title="Atividades">
            <AtividadesAdmin />
        </b-tab>
        <b-tab title="Usuários" v-if="user.admin">
            <UsuariosAdmin />
        </b-tab>
      </b-tabs>
    </b-card>

  

</div>
 
  

</template>

<script>
import {mapState} from 'vuex'

import QuadrosAdmin from "./QuadrosAdmin";
import UsuariosAdmin from "./UsuariosAdmin";
import AtividadesAdmin from "./AtividadesAdmin";
import PageTitle from '../templates/PageTitle'

export default {
  name: "AdminPages",
  components: { QuadrosAdmin, UsuariosAdmin , AtividadesAdmin, PageTitle},
  computed:mapState(['user'])
};
</script>

<style>

.card{

  background:#fffd;
}

.card .tabs .tab-content .tab-pane.card-body{
  background-image: linear-gradient(to bottom, #F0F8FF, #F0F8FF00);

  box-shadow: 0px 3px 10px rgba(0,0,0,0.2);

  min-height: 100vh;
}

.card-header{
  background: #fff;
  font-size: 1.2rem;
  font-weight: bold;

  padding: 12px 0;

  display: flex;
  align-items: center;
  justify-content: center;
}


  .card-header ul{
    padding:0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card-header ul li a{
    padding: 8px 20px;
    border-radius: 5px; 

  }

  .card-header ul li a.nav-link.active{
    background: #68C3D8;

    border-bottom:2px groove rgb(34, 153, 180); 
    border-right:2px groove rgb(34, 153, 180); 

    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2), 
                2px 2px 10px rgba(0, 0, 0, 0.05);

  }

  .card-header ul li a.nav-link{
    color:#000;
  }

  .tab-content.col{
    background:#fff;
  }

  table thead{
    background: #fff;
  }

</style>