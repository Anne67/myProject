<template>
    <div class="detail container">
      <router-link to="/" class="btn btn-default">返回</router-link>
      <h1 class="page-header">
        {{customer.name}}
        <span class="pull-right">
          <router-link class="btn btn-primary" :to="'/customer/edit/'+customer.id">编辑</router-link>
          <button class="btn btn-danger" @click="deleteCustomer(customer.id)">删除</button>
        </span>
      </h1>
      <ul class="list-group">
        <li class="list-group-item">
          <span class="glyphicon glyphicon-folder-open"> {{customer.email}}</span>
        </li>
        <li class="list-group-item">
          <span class="glyphicon glyphicon-earphone"> {{customer.phone}}</span>
        </li>
      </ul>
      <ul class="list-group">
        <li class="list-group-item">
          <span class="glyphicon glyphicon-education"> {{customer.education}}</span>
        </li>
        <li class="list-group-item">
          <span class="glyphicon glyphicon-flag"> {{customer.graduationschool}}</span>
        </li>
      </ul>
      <ul class="list-group">
        <li class="list-group-item">
          <span class="glyphicon glyphicon-briefcase"> {{customer.profession}}</span>
        </li>
        <li class="list-group-item">
          <span class="glyphicon glyphicon-paperclip"> {{customer.profile}}</span>
        </li>
      </ul>
    </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: 'detail',
        data() {
            return {
              customer:'',
            }
        },
      methods:{
        getCustomers(id){
          axios.get('/users/'+ id)
            .then((data)=>{
              console.log(data);
              this.customer = data.data;
            })
        },
        deleteCustomer(id){
          // console.log(id);
          axios.delete("/users/" + id)
            .then(res=>{
              this.$router.push({path:"/",query:{alert:"用户删除成功!"}})
            })
        }
      },
      created(){
        this.getCustomers(this.$route.params.id)
      }
    }
</script>


<style scoped>

</style>
