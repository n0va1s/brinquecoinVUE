<template>

  <div>
    <PageTitle icon="fa fa-search" title="Quadros para começar" />
    <div class="home">
        <TodosQuadros :onlyView="true" />
    </div>
  </div>

</template>

<script>
import TodosQuadros from '../Quadros/TodosQuadros'
import PageTitle from '../templates/PageTitle'

export default {
    name:'Home',
    components: {TodosQuadros, PageTitle}

}
</script>

<style>


</style>