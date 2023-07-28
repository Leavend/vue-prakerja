<template>
    <div class="todo">
        <TodoList title="Todo List" />
    </div>
</template>

<script>
import TodoList from '@/components/ToDoList.vue';
export default {
    name: 'TodoView',
    components: {
        TodoList
    }
}
</script>