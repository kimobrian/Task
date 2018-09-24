<template lang="html">
  <section>
    <h1 class='title'>{{title}}</h1>
    <div class='row'>
      <div class='col-12 content'>
        <span class='create'>
          <input class='form-control' type='text' placeholder='task name...' v-model='name'>
          <button class='btn btn-primary' v-on:click='addTodo'>Add</button>
        </span>
        <br/>
        <br/>
        <ul class='list-group'>
          <li class='list-group-item' v-for='todo of todos' :key='todo.id'>
            <span>{{todo.name}}</span>
            <div class='actions float-right'>
              <span class='edit bg-success'>E</span>
              <span class='delete bg-danger'>D</span>
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
        this.$emit('create', this.name);
        this.name = '';
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
