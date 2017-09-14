<template lang="html">
  <div class="col-md-12">
    <BackLog></BackLog>
    <Todo></Todo>
    <Doing></Doing>
    <Done></Done>
  </div>
</template>

<script>
import BackLog from '@/components/BackLog'
import Todo from '@/components/Todo'
import Doing from '@/components/Doing'
import Done from '@/components/Done'
export default {
  components: {
    BackLog,
    Todo,
    Doing,
    Done
  },
  computed: {
    cobaAmbilState () {
      return this.$store.state.count
    }
  },
  created () {
    this.$store.dispatch('getTask')
    this.$store.dispatch('newTask', 'saya suka kamu')
  }
}
</script>

<style lang="css">
</style>
