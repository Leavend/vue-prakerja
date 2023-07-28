<template>
    <div class="list">
        <h2>{{ title }}</h2>
        <div class="text">
            <ol>
                <li v-for="(list, index) in lists" :key="index">
                    {{ list }}
                </li>
            </ol>
        </div>

        <div class="form">
            <input type="text" v-model="todo" @keyup.enter="saveTodo" placeholder="Masukan List">
            <button @click="saveTodo">Tambahkan</button>
        </div>
        <span>{{ checkListLength }}</span>
    </div>
</template>

<script>
export default {
    name: 'TodoList',
    props: {
        title: String
    },
    data() {
        return {
            lists: [],
            todo: ''
        }
    },
    methods: {
        saveTodo() {
            if (this.todo.trim() != '') {
                this.lists.push(this.todo.trim())
                this.todo = ''
            } else {
                alert('Mohon masukan list anda')
            }

        }
    },
    computed: {
        checkListLength: function () {
            let result = ''
            if (this.lists.length >= 4) {
                result = "Hebat!"
            }
            return result
        }
    }
}
</script>

<style>
.list {
    font-size: 1.3rem;
    font-family: inherit;
}

.text {
    text-align: left;
    margin: auto;
    width: 400px;
}

input[type="text"] {
    border: none;
    border-bottom: 2px solid black;
    font-family: inherit;
    outline: 0;
    font-size: 1.3rem;
    padding: 7px 0;
    background: transparent;
}

.form {
    margin-bottom: 15px;
}

button {
    background-color: #04aa6d;
    border: none;
    border-radius: 50px;
    font-size: 1rem;
    color: white;
    padding: 16px 32px;
    text-decoration: none;
    margin: 4px 2px;
    cursor: pointer;
}
</style>