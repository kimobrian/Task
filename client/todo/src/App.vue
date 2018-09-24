<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <list-tasks 
            :todos="todos" 
            :title="title" 
            @create="createTodo"
            @delete="deleteTodo"
            @update="updateTodo"
          ></list-tasks>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListTasks from './components/ListTasks'
import axios from 'axios';

export default {
  name: 'app',
  data() {
    return {
      todos: [],
      errors: [],
      title: 'My Todos Tasks'
    }
  },
  async created() {
    try {
      const response = await axios.get(`http://localhost:5500/`)
      this.todos = response.data
    } catch (e) {
      this.errors.push(e)
    }
  },
  components: {
    ListTasks
  },
  methods: {
    async createTodo (name) {
      try {
        const response = await axios.post(`http://localhost:5500/`, { name })
        this.todos.push(response.data);
      } catch (e) {
        this.errors.push(e)
        alert('An Error Occurred creating the item')
      }
    },
    async deleteTodo (task_id) {
      try {
        const response = await axios.delete(`http://localhost:5500/${task_id}`)
        this.todos = this.todos.filter(todo=> {
          return todo.id !== task_id;
        })
      } catch (e) {
        this.errors.push(e)
      }
    },
    async updateTodo (task_id, name) {
      try {
        const response = await axios.put(`http://localhost:5500/${task_id}`, { name })
        this.todos = this.todos.map(todo=> {
          return todo.id === task_id ? response.data : todo;
        })
      } catch (e) {
        this.errors.push(e)
      }
    },
  }
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
