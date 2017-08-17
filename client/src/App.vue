<template>
  <div class="">
    <nav class="navbar navbar-default">
      <a href="#" class="navbar-brand">Kanban</a>
      <button class='btn btn-primary ' type="button" name="button" data-toggle="modal" data-target="#myModal">New Task</button>
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
                <textarea  rows="5" class="form-control"></textarea>
                <label>Point</label>
                <input type="text" name="" value="" class="form-control" placeholder="Point...">
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
    <Board></Board>
  </div>
</template>

<script>
import Board from '@/components/Board'
export default {
  name: 'app',
  components: {
    Board
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
