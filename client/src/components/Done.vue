<template lang="html">
  <div class="col-md-3">
    <div class="panel-group">
      <div class="panel panel-primary">
          <div class="panel-heading">Done</div>
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
      button: 'Doing'
    }
  },
  components: {
    Card
  },
  computed: {
    tasks () {
      this.$store.getters('done')
    }
  }
}
</script>

<style lang="css">
</style>
