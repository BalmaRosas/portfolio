<template>
<div>
<nav class="flex justify-between align-center px-[55px] py-[18px] bg-pastelPurple opacity-95 ">
    <img class="h-[45px]" src="https://res.cloudinary.com/dtqumztbl/image/upload/v1662723276/portfolio/BALMA_ROSASlogo_wc1m28.png" alt="Balma Rosas">
  
    <div>
        <router-link class=" text-[21px] text-mainPurple" to="/">projects</router-link>
        <router-link class=" text-[21px] text-mainPurple mx-5" to="/about">about</router-link>
        <router-link class=" text-[21px] text-mainPurple" to="/contact">contact</router-link>
    </div>
</nav>
</div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    msg: String
  }
}

</script>

<style>

</style>