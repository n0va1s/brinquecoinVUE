<template>
    <div>
        <PageTitle icon="fa fa-user" title="Seus Quadros" />
        <div class="user-quadros">
            <TodosQuadros :seq_responsavel="user.id"/>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'

import TodosQuadros from './TodosQuadros'
import PageTitle from '../templates/PageTitle'

export default {
    name:"UserQuadros",
    components:{TodosQuadros, PageTitle},
    computed: mapState(['user']), //usuario logado
    
}
</script>

<style>



</style>