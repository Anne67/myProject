<template>
    <div class="container customers">
      <Alert v-if="alert" :message="alert"></Alert>
       <h1 class="page-header">用户管理系统</h1>
      <input type="text" class="form-control" placeholder="搜索" v-model="filterInput"><br/>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>序号</th>
            <th>姓名</th>
            <th>邮箱</th>
            <th>电话</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(customer,i) in filterBy(customers,filterInput)">
            <td>{{i}}</td>
            <td>{{customer.name}}</td>
            <td>{{customer.email}}</td>
            <td>{{customer.phone}}</td>
            <td>
              <router-link class="btn btn-default" :to="'/customer/detail/'+ customer.id">
                详情
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
  import Alert from './Alert'
  import axios from "axios"
    export default {
        name: 'customers',
        data() {
            return {
              customers:[],
              alert:"",
              filterInput:''
            }
        },
        methods:{
            getCustomers(){
               axios.get('/users')
                 .then((data)=>{
                   console.log(data);
                   this.customers = data.data;
                 })
            },
          filterBy(customers,value){
            return customers.filter(function(cus){
              return cus.name.match(value)
            })
          }
        },
        created(){
            if(this.$route.query.alert){
              this.alert = this.$route.query.alert
            }
            this.getCustomers()
        },
        components:{
          Alert
        }
    }
</script>


<style scoped>

</style>
