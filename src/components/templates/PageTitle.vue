<template>
    <div class="page-title">
        <h1> <i v-if="icon" :class="icon"></i> {{title}} </h1>
        <hr>
    </div>
</template>

<script>
export default {
    name:"PageTitle",
    props: ['icon', 'title']
}
</script>

<style>
    .page-title{
        text-align: center;
        width: 100%;
    }
    .page-title h1{
        margin: 0px;
    }

</style>