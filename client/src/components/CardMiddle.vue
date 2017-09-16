<template lang="html">
  <div class="" >
    <div class="panel panel-default panel-group" v-for="task in tasks"  >
      <div class="panel-heading">{{task[1].task}}</div>
      <div class="panel-body">
        <p>Deskripsi : {{task[1].deskripsi}}</p>
        <p>Assign to {{task[1].asign}}</p>
        <button class="btn btn-primary col-md-4" type="button" name="button" @click="backlog(task)">{{firstbutton}}</button>
        <button class="btn btn-danger col-md-4" type="button" name="button" @click="deleteTask(task)">Delete</button>
        <button class="btn btn-warning col-md-4" type="button" name="button" @click='doing(task)'>{{lastbutton}}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['firstbutton', 'lastbutton'],
  computed: {
    tasks () {
      if (this.firstbutton === 'Backlog') {
        return this.$store.getters.todo
      } else {
        return this.$store.getters.doing
      }
    }
  },
  methods: {
    doing (id) {
      if (this.lastbutton === 'Doing') {
        this.$store.dispatch('doing', id)
      } else {
        this.$store.dispatch('done', id)
      }
    },
    deleteTask (id) {
      this.$store.dispatch('deleteTask', id)
    },
    backlog (id) {
      if (this.firstbutton === 'Backlog') {
        this.$store.dispatch('backlog', id)
      } else {
        this.$store.dispatch('todo', id)
      }
    }
  }
}
</script>

<style lang="css">
</style>
