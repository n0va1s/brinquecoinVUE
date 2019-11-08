<template>
<footer class="footer">
    <a href="https://brinquecoin.com">
        <strong>  Brinquecoin.com <i class="fa fa-mouse-pointer"></i>  </strong>
    </a>
</footer>
</template>

<script>
export default {
    name:"Footer"
}
</script>

<style>
    .footer{
        grid-area: footer;
        background: #68C3D8;
        
        position: fixed;
        width: 100%;
        height: 35px;
        bottom: 0px;

        z-index: 10;

        display: flex;
        justify-content: center;
        align-items: center;

    }

    .footer a{  
        color:#111a;
    }

    .footer a:hover{
        text-decoration: none;
        color:#000;
    }
</style>