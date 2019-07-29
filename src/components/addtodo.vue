<template>
    <div>
        <form action="" @submit.prevent="addTodo">
            <input v-model="title" type="text" name="title" placeholder="请添加代办事项">
            <input type="submit" value="添加" class="btn">
        </form>
    </div>
</template>

<script>
// uuid插件 自动生成id
// import uuid from 'uuid'
export default {
    name:'AddTodo',
    data(){
        return {
            title:''
        }
    },
    methods:{
        addTodo(e){
            const add =  {
        // 使用uuid
          id:9,
          title:this.title,
          completed:false
        }
        
        
            console.log(add,this.title);
            this.$emit('addTodo',add);
            this.title = '';
      
        }
    }
}
</script>

<style scoped>
    form{
        display: flex;
    }
    input[type='text'] {
        flex: 10;
        padding: 5px;
    }
    input[type='submit'] {
        flex: 2;
    }
    .btn{
        display: inline-block;
        border: none;
        background-color: #555;
        color: #fff;
        padding:7px 20px;
        cursor: pointer;
    }
    .btn:hover{
        background-color: #666;
    }
</style>
