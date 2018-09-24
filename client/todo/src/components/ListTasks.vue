<template lang="html">
  <section>
    <h1 class='title'>{{title}}</h1>
    <div class='row'>
      <div class='col-12 content'>
        <span class='create'>
          <input class='form-control' type='text' placeholder='task name...' v-model='name'>
          
          <button v-if='editing' class='btn btn-primary' v-on:click='updateTodoItem'>Edit</button>
          <button v-else class='btn btn-primary' v-on:click='addTodo'>Add</button>
        </span>
        <br/>
        <br/>
        <ul class='list-group'>
          <li class='list-group-item' v-for='todo of todos' :key='todo.id'>
            <span>{{todo.name}}</span>
            <div class='actions float-right'>
              <span class='edit bg-success' v-on:click='toggleUpdate(todo)'>Edit</span>
              <span class='delete bg-danger' v-on:click='deleteTodo(todo)'>Del</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script lang="js">
  export default  {
    name: 'ListTasks',
    data() {
      return {
        name: '',
        editing: false,
      }
    },
    props: {
      todos: Array,
      title: String
    },
    methods: {
    
    },
    computed: {

    },
    methods: {
      addTodo() {
        if(!this.name.trim()) {
          window.alert('Please provide a task name');
          return;
        }
        this.$emit('create', this.name);
        this.name = '';
      },
      deleteTodo(todo) {
        const confirm = window.confirm(`Do you want to delete this task? \n ${todo.name}`)
        if(confirm) this.$emit('delete', todo.id);
      },
      toggleUpdate(todo) {
        this.editing = {...todo};
        this.name = this.editing.name;
      },
      updateTodoItem() {
        if(!this.name.trim()) {
          window.alert('Please provide a task name');
          return;
        }
        if(this.name) { this.editing.name = this.name };
        this.$emit('update', this.editing.id, this.editing.name);
        this.name = '';
        this.editing = false;
      }
    }
}
</script>

<style scoped lang="scss">
  .title {
    text-align: center;
  }
  .create {
    display: inline;
    input {
      width: 70%;
      display: inline-block;
      margin-right: 3%;
    }
    button {
      width: 25%;
    }
  }
  .content {
    max-width: 50%;
    margin: auto;
  }
  .actions {
    display: inline-block;
  }
  .edit,
  .delete {
    cursor: pointer;
    color: #fff;
    padding: 5px;
    margin-right: 10px;
    border-radius: 50%;
  }
  .edit {
    border: 1px solid green;
  }
  .delete {
    border: 1px solid red;
  }
</style>
