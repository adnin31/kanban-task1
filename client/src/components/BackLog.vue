<template lang="html">
  <div class="col-md-3">
    <div class="panel-group" >
      <div class="panel panel-primary">
          <div class="panel-heading">BackLog</div>
          <div class="panel-body">
            <Card :firstbutton="button"></Card>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card'
export default {
  data () {
    return {
      button: 'To-Do'
    }
  },
  components: {
    Card
  }
}
</script>

<style lang="css">
</style>
