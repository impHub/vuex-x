<template>
  <div id="app">
    <Header></Header>
    <Addtodo @addTodo='addT'></Addtodo>
    <!-- class数据单向绑定 -->
    <!-- <div :class='cl' v-for="(todo,index) in todos" :key="todo.id">
        <ul>
          <li>{{todo}}{{index}}</li>
        </ul>
    </div> -->
    <todos :todos='todos' @handItem="del"></todos>
    <!--  -->
      <template>
  <el-table
    :data="arr"
    stripe
    style="width: 100%">
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      property ="status"
      label="状态">
    </el-table-column>
      <!--下拉菜单  -->
  <el-table-column label="操作">
      <template slot-scope="scope">
     <el-dropdown>
  <span class="el-dropdown-link">
    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>黄金糕</el-dropdown-item>
    <el-dropdown-item>狮子头</el-dropdown-item>
    <el-dropdown-item>螺蛳粉</el-dropdown-item>
    <el-dropdown-item disabled>双皮奶</el-dropdown-item>
    <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
      </template>
    </el-table-column>
  <!--  -->
  </el-table>

</template>
    <!--  -->
  </div>
</template>
<script>
import Addtodo from './components/addtodo'
import todos from './components/Todos'
import Header from './components/layout/Header'
export default {
  name:'app',
  components:{
    todos,
    Header,
    Addtodo
  },
  data(){
    return{
      val:'1',
      stu:['已付款','已发货','已收货','已完成'],
         arr:[{
        status:1,
        name:'鸡蛋'
      },{
         status:2,
        name:'大米'
      }],
      cl:'wq',
      mes:'hello',
      theme1:'1ewqe',
      todos:[

      ]
    }
  },
  methods:{
    btn(e,c){
      console.log(e,c)
    },
    del(e){
      console.log(e);
    this.todos =  this.todos.filter(res=>{
        console.log(res)
        //          1      1
        return res.id !== e;
      })
    },
    addT(e){
      console.log('add',e)
      // this.todos.unshift(e)
      this.todos = [...this.todos,e];
    },
    
  },
  created(){
                        //请求5条
    this.$axios.get('/todos?_limit=5')
        .then(res=>{
          console.log(res)
          this.todos = res.data;
        })
  }
}
</script>


<style>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body{
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
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
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
