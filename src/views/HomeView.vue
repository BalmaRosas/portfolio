<template>
  <div>
    <NavBar/>

    <div class="flex mx-[110px] my-[50px]">
      <img class="h-[220px]" src="https://res.cloudinary.com/dtqumztbl/image/upload/v1662751948/portfolio/foto_1portrait_oau8ql.png" alt="">
      <div class="ml-[55px]">
        <p class="text-base" >Hey! It’s Balma</p>
        <h3 class="text-2xl text-pastelPurple" >product & UX/UI designer</h3>
        <p class="text-base">based in Barcelona. With a strong background in design and graphics, and a love for analysis and research. </p>
      </div>
    </div>
    <p class="text-sm mx-[110px]">My whole career has been focused on <b>designing the perfect product</b> for customers through 🔍benchmarking, 📊inhouse data analyisis and 👀trend research.</p>

    <p class="text-sm mx-[110px] my-[18px]">I’ve spent nearly 3 years working in the head office of one of the 🏆 <b>Fortune Global 500</b> companies.</p>

    <p class="text-sm mx-[110px]">I love learning 🤓, and I really appreciate working in teams where <b>I can ask others</b> if I have a doubt and <b>learn from my mates</b>.</p>
    <div class="flex justify-center">
      <img class="h-[32px] my-[20px]" src="https://res.cloudinary.com/dtqumztbl/image/upload/v1662763448/portfolio/Group_1arrow_kasvsd.png" alt="arrow">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'HomeView',
  components: {
    NavBar
  }
}
</script>
