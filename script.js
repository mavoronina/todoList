
const todoItem = {
  props:['todo','index'],
  template: 
  ` 
  <tr>
  <td >{{ index + 1 }} </td>
  <td >{{ todo.todo }}</td>
  <td >{{ todo.completed}}</td>
  <td >{{ todo.userId}}</td>
  <td >
  <button v-on:click="$emit('remove')"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <rect x="1" y="1" width="30" height="30" rx="4" fill="#1B1A17" stroke="#A35709" stroke-width="2"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0907 12.121C12.8229 11.8532 12.3888 11.8532 12.121 12.121C11.8532 12.3887 11.8532 12.8229 12.121 13.0907L14.3232 15.2929C14.7137 15.6834 14.7137 16.3166 14.3232 16.7071L12.121 18.9092C11.8533 19.177 11.8533 19.6112 12.121 19.879C12.3888 20.1468 12.823 20.1468 13.0908 19.879L15.2929 17.6768C15.6835 17.2863 16.3166 17.2863 16.7071 17.6768L18.9092 19.8789C19.177 20.1467 19.6112 20.1467 19.879 19.8789C20.1467 19.6111 20.1468 19.177 19.879 18.9092L17.6769 16.7071C17.2864 16.3166 17.2864 15.6834 17.6769 15.2929L19.879 13.0908C20.1468 12.823 20.1468 12.3888 19.879 12.121C19.6112 11.8532 19.1771 11.8532 18.9093 12.121L16.7071 14.3231C16.3166 14.7137 15.6835 14.7137 15.2929 14.3231L13.0907 12.121Z" fill="#FF8303"/>
  </svg></button>
  </td>
  </tr>

    `,
};

const todoHeader = {
  props:['column'],
  template: 
  `
  <th >{{column}} </th>
    `,
};

const app = Vue.createApp({
  data() {
    return {
      todoList:[],
      columnsNames:['id','Description','Done','User number','Actions'],
      newTodoText: '',
      nextTodoId: 151,
      newTodoCompletion: false,
      newTodoUserId: '',
      sortKey: 'id',
      sortDirection: 'asc',
      filterKey: "bute"
    };
  },
  components: {
    "todo-item": todoItem,
    "todo-header": todoHeader,
  },
  mounted() {
      axios
      .get('https://dummyjson.com/todos/?limit=500')
      .then(response => (this.todoList = response.data.todos));
  },
  methods: {
    addNewTodo: function () {
      this.todoList.push({
        id: this.nextTodoId++,
        todo: this.newTodoText,
        userId: this.newTodoUserId,
        completed: this.newTodoCompletion,
      })
      this.newTodoText = '',
      this.newTodoUserId = ''
    }
  }
});

app.mount("#app");

//<button v-on:click="$emit('remove')">Delete Task {{index + 1}}</button>