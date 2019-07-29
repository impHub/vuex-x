<template>
  <!-- 这个数据绑定的class是累加不是覆盖当前class -->
  <div class="todo-item" :class="{'is-complete':todo.completed}">
    <p>
      <!--   这里的@click和@change事件触发事件源不一样 -->
      <input type="checkbox" @change="mark" />
      {{todo.title}}
        <!--            注册事件API 第一个参数事件名 第二个要传递的参数 -->
      <button class="del" @click="$emit('deleteItem',todo.id)">X</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: ["todo"],
  methods: {
    mark(e) {
      this.todo.completed = !this.todo.completed;
    }
  }
};
</script>

<style>
.todo-item {
  background-color: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}
.is-complete {
  text-decoration: line-through;
}
.del {
  background-color: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 9px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
}
</style>
