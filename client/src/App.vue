<template>
  <div class="">
    <Navbar></Navbar>
    <Board></Board>
  </div>
</template>

<script>
import Board from '@/components/Board'
import Navbar from '@/components/Navbar'
export default {
  name: 'app',
  components: {
    Board,
    Navbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
},
#newTask {

}

</style>
