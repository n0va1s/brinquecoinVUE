<template>
    <div class="content">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:"Content"
}
</script>

<style>
.content{
    /* background:#5BC4DA; */
        grid-area: content;
        /* background:transparent; */
        padding: 30px;

}
</style>