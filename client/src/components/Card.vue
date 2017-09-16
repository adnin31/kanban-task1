<template lang="html">
  <div class="">
    <div v-for="task in tasks" class="panel panel-default">
      <div class="panel-heading">{{task[1].task}}</div>
      <div class="panel-body">
        <p>Deskripsi</p>
        <p>{{task[1].deskripsi}}</p>
        <p>Asign to: {{task[1].asign}}</p>
        <button class="btn btn-primary" type="button" name="button" @click="geser(task)">{{firstbutton}}</button>
        <button class="btn btn-danger" type="button" name="button" @click="deleteTask(task)">Delete </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['firstbutton'],
  methods: {
    getBackLog () {
      this.$store.getters.backlog
    },
    geser (id) {
      if (this.firstbutton === 'To-Do') {
        this.$store.dispatch('todo', id)
      }
    },
    deleteTask (id) {
      this.$store.dispatch('deleteTask', id)
    }
  },
  computed: {
    tasks () {
      if (this.firstbutton === 'To-Do') {
        return this.$store.getters.backlog
      } else {
        return this.$store.getters.done
      }
    }
  }
}
</script>

<style lang="css">
</style>
