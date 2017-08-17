<template lang="html">
  <div class="panel-group">
    <div class="panel-group">
      <div class="panel-heading">Login</div>
      <div class="panel-body">
        <p>Point :10</p>
        <p>Assign to tama</p>
        <button class="btn btn-primary col-md-4" type="button" name="button">{{firstbutton}}</button>
        <button class="btn btn-danger col-md-4" type="button" name="button">Delete</button>
        <button class="btn btn-warning col-md-4" type="button" name="button">{{lastbutton}}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['firstbutton', 'lastbutton']
}
</script>

<style lang="css">
</style>
