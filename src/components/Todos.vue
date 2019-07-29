<template>
    <div>
        <div v-for="(todo) in todos" :key="todo.id">
           
               <!-- 每次传的值不一样，使用子组件可以更好的操控这些值 -->
               <!--                     子传递过来的事件=“自定义事件接收” -->
                  <!-- <todoItem :todo="todo" @deleteItem='deleteItem'/> -->
                   <todoItem :todo="todo" @deleteItem="$emit('handItem',todo.id)"/>
           
         
        </div>
    </div>
</template>

<script>
import todoItem from './todoItem'
export default {
    name:'Todos',
    props:{
         todos:{
            type:Array,
            required:true
        },
    },
    components:{
        todoItem
    },
    data(){
        return {
        }
    },
    methods:{
        btn(){
            console.log(this.todos)
        }
    },
    
}
</script>

<style scoped>

</style>
