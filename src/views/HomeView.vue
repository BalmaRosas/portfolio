<template>
  <div>
    <NavBar/>
    <h1>HEY I'M HERE!!!</h1>
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
