// Komponen untuk daftar to-do
Vue.component("todo-list", {
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
  template: `
    <div>
      <h1 style="color: #d2042d">
        Latihan Day 3 - Todo List dengan Vue Komponen Tunggal
      </h1>
      <ol>
        <li v-for="(todo, index) in todos" :key="index">{{ todo }}</li>
      </ol>
      <input type="text" v-model="newTodo" @keyup.enter="addToDo" />
      <button @click="addToDo">Tambahkan</button>
      <div v-if="todos.length >= 4">Hebat!</div>
    </div>
  `,
  data() {
    return {
      newTodo: "",
    };
  },
  methods: {
    addToDo() {
      if (this.newTodo.trim() !== "") {
        this.$emit("add-todo", this.newTodo);
        this.newTodo = "";
      }
    },
  },
});

// Komponen utama aplikasi Vue
new Vue({
  el: "#app",
  data: {
    todos: [],
  },
  methods: {
    addTodoToList(todo) {
      this.todos.push(todo);
    },
  },
  template: `<todo-list :todos="todos" @add-todo="addTodoToList" />`,
});
