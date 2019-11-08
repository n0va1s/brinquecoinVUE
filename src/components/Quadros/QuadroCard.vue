<template>

 <router-link :to="{name: 'quadroById', params:{ id: quadro.seq_quadro }, query:{onlyView} }">

    <div class="card m-4" style="width: 15rem;">
        <img class="card-img-top" :src="quadro.url_imagem" alt="Thumbnail" />

        <div class="card-body">
        <h5 class="card-title">{{quadro.author}}</h5>
        <p class="card-text">{{`${quadro.tip_quadro} de ${quadro.nom_crianca}`}}</p>

        <div class="actions">

            <a href @click.prevent="duplicarQuadro" class="btn btn-success" >
                
                <i class="fa fa-plus"></i>
                Duplicar

            </a>

            <a href @click.prevent="excluirQuadro" class="btn btn-danger" v-if="!onlyView">
                
                <i class="fa fa-close"></i>
                Encerrar
                
            </a>

        </div>

        </div>
    </div>

  </router-link>

</template>

<script>
export default {
  name: "QuadroCard",
  props:{
    quadro:Object,
    onlyView:Boolean
   },
   methods:{
    duplicarQuadro(){ //fazer ação de duplicar o quadro <<<<<<<<<<<

      },
      excluirQuadro(){ //fazer a ação de excluir o quadro <<<<<<<<<<

      },
   }

};
</script>

<style>

a:hover{
    text-decoration: none;
    font-weight: bold;
}

a:hover .card{
   border: 1px solid #68C3D8;
   background: #68C3D8;
}

.card .card-body{
    color:#000;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15),
                3px 3px 37px rgba(0, 0, 0, 0.1);
    
}

.card .card-img-top{
    height: 10rem;
}

.card img{
    
    background-size: cover;
}

.card .actions{
    display: flex;
    justify-content: space-around;
    align-items: center;

    

}

.card .actions a{
    font-size: 0.9rem;
}

</style>