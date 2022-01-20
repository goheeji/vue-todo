<template>
  <div class="inputBox shadow">
      <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
      <span class="addContainer" v-on:click="addTodo">
          <i class="fas fa-plus addBtn"></i>
      </span>

      <!-- use the modal component, pass in the prop -->
      <!-- <Modal v-if="showModal" @close="showModal = false"> -->
      <Modal v-if="showModal">
        <!--
      you can use custom content here to overwrite
      default content
    -->
        <h3 slot="header">
            경고!
            <i class="closeModalBtn fas fa-times" v-on:click="showModal=false"></i>
        </h3>
        <div slot="body">
            내용을 입력하세요.
        </div>
        <!-- <h5 slot="footer">
            copy right
        </h5> -->
      </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue'

export default {
    data: function(){
        return{
            newTodoItem: "",
            showModal: false
        }
    },
    methods:{
        addTodo: function(){
            if(this.newTodoItem !== ''){ // 값이 있을때만 실행
                // this.$emit('이벤트 이름', 인자1, 인자2...);
                // this.$emit('addTodoItem', this.newTodoItem);
                this.$store.commit('addOneItem', this.newTodoItem);
                this.clearInput();
            }else{
                this.showModal=!this.showModal;
            } 
        },
        clearInput:function(){
            this.newTodoItem='';
        },
    },
    components:{
        Modal

    }
}
</script>

<style scoped>
input:focus {
    outline: none;
}
.inputBox{
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}
.inputBox input{
    /* height: 90%; */
    border-style: none;
    font-size: 1rem;
}
.addContainer{
    float: right;
    background: linear-gradient(to right, #6478FB,#8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
}
.addBtn{
    color: white;
    vertical-align: middle;
}
.closeModalBtn{
    color: #42b983;
}
</style>