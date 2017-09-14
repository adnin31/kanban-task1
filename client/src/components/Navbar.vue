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
              <input type="text" name="" value="" class="form-control" placeholder="Your task">
              <label>Deskripsi</label>
              <textarea  rows="3" class="form-control"></textarea>
              <label>Assign to</label>
              <input type="text" name="" value="" class="form-control" placeholder="Assign To">
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary" data-dismiss="modal">Save</button>
          </div>
        </div>

      </div>
    </div>
  </nav>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
