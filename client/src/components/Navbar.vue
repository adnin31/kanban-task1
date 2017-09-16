<template lang="html">
  <nav class="navbar navbar-default">
    <a href="#" class="navbar-brand">Kanban</a>
    <ul class="nav navbar-nav">
      <li><a data-toggle="modal" data-target="#myModal" style="cursor:pointer">New Task</a></li>
    </ul>
    <div class="modal fade" id="myModal" role="dialog">
      <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">New task</h4>
          </div>
          <div class="modal-body">
            <form class="form-group">
              <label>New task</label>
              <input type="text" class="form-control" placeholder="Your task" v-model="task">
              <label>Deskripsi</label>
              <textarea  rows="3" class="form-control" v-model="deskripsi"></textarea>
              <label>Assign to</label>
              <input type="text" class="form-control" placeholder="Assign To" v-model="asign">
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal" @click="cancel">Cancel</button>
            <button type="button" class="btn btn-primary" data-dismiss="modal" @click="save">Save</button>
          </div>
        </div>

      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      task: '',
      deskripsi: '',
      asign: ''
    }
  },
  methods: {
    cancel () {
      this.task = ''
      this.deskripsi = ''
      this.asign = ''
    },
    save () {
      var payload = {
        task: this.task,
        deskripsi: this.deskripsi,
        asign: this.asign,
        status: 'backlog'
      }
      this.$store.dispatch('newTask', payload)
      this.task = ''
      this.deskripsi = ''
      this.asign = ''
      this.$store.dispatch('getTask')
    }
  }
}
</script>

<style lang="css">
</style>
