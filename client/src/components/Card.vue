<template lang="html">
  <div class="panel-group">
    <div class="panel-group">
      <div class="panel-heading">Login</div>
      <div class="panel-body">
        <p>Point :10</p>
        <p>Assign to tama</p>
        <button class="btn btn-primary" type="button" name="button">{{firstbutton}}</button>
        <button class="btn btn-danger" type="button" name="button">Delete </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['firstbutton']
}
</script>

<style lang="css">
</style>
