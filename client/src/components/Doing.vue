<template lang="html">
  <div class="col-md-3">
    <div class="panel-group">
      <div class="panel panel-primary">
          <div class="panel-heading">Doing</div>
          <div class="panel-body">
            <CardMiddle :firstbutton='button' :lastbutton='button1'></CardMiddle>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardMiddle from '@/components/CardMiddle'
export default {
  data () {
    return {
      button: 'To-Do',
      button1: 'Done'
    }
  },
  components: {
    CardMiddle
  }
}
</script>

<style lang="css">
</style>
