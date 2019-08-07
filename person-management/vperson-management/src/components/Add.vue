<template>
    <div class="add container">
      <Alert v-if="alert" :message="alert"></Alert>
      <h1 class="page-header">添加用户</h1>
      <form v-on:submit="addCustomer">
        <div class="well">
          <h4>用户信息</h4>
          <div class="from-group">
            <label>姓名</label>
            <input type="text" class="form-control" placeholder="name" v-model="customer.name">
          </div>
          <div class="from-group">
            <label>电话</label>
            <input type="text" class="form-control" placeholder="phone" v-model="customer.phone">
          </div>
          <div class="from-group">
            <label>邮箱</label>
            <input type="text" class="form-control" placeholder="email" v-model="customer.email">
          </div>
          <div class="from-group">
            <label>学历</label>
            <input type="text" class="form-control" placeholder="education" v-model="customer.education">
          </div>
          <div class="from-group">
            <label>毕业学校</label>
            <input type="text" class="form-control" placeholder="graduationschool" v-model="customer.graduationschool">
          </div>
          <div class="from-group">
            <label>职业</label>
            <input type="text" class="form-control" placeholder="profession" v-model="customer.profession">
          </div>
          <div class="from-group">
            <label>个人简介</label>
            <textarea class="form-control" cols="30" rows="10" v-model="customer.profile"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">添加</button>
        </div>
      </form>
    </div>
</template>

<script>
  import axios from "axios"
  import Alert from './Alert'
    export default {
        name: 'add',
        data() {
            return {
              customer:{},
              alert:''
            }
        },
      components:{
          Alert
      },
      methods:{
          addCustomer(e){
            // console.log(123);
            if(!this.customer.name || !this.customer.phone || !this.customer.email){
              // console.log("请添加对应的信息");
              this.alert = "请添加对应的信息"
            }else{
              let newCustomer = {
                name:this.customer.name,
                phone:this.customer.phone,
                email:this.customer.email,
                education:this.customer.education,
                graduationschool:this.customer.graduationschool,
                profession:this.customer.profession,
                profile:this.customer.profile
              };
              axios.post("/users",newCustomer)
                .then(res => {
                  // console.log(res);
                  this.$router.push({path:"/",query:{alert:"用户信息添加成功!"}})
                });
              e.preventDefault();
            }

            e.preventDefault();
          }

        }
    }
</script>


<style scoped>

</style>
