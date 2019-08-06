<template>
    <div id="add-blog">
      <h2>添加博客</h2>
      <form v-if="!submitted">
        <label>博客标题</label>
        <input type="text" v-model="blog.title" required/>

        <label>博客内容</label>
        <textarea v-model="blog.content"></textarea>

        <div id="checkboxes">
          <label>情感杂谈</label>
          <input type="checkbox" value="情感杂谈" v-model="blog.categories">
          <label>技术闲聊</label>
          <input type="checkbox" value="技术闲聊" v-model="blog.categories">
          <label>奇闻异事</label>
          <input type="checkbox" value="奇闻异事" v-model="blog.categories">
          <label>生活日常</label>
          <input type="checkbox" value="生活日常" v-model="blog.categories">
          <label>心情日记</label>
          <input type="checkbox" value="心情日记" v-model="blog.categories">
        </div>

        <label>作者:</label>
        <select v-model="blog.author">
          <option v-for="author in authors" :key="author">{{author}}</option>
        </select>
        <button v-on:click.prevent="post" :disabled="submitted">添加博客</button>
      </form>

      <div v-if="submitted">
        <h3>您的博客发布成功!</h3>
      </div>

      <div id="preview">
        <h3>博客总览</h3>
        <p>博客标题:{{blog.title}}</p>
        <p>博客内容:</p>
        <p>{{blog.content}}</p>
        <p>博客分类:</p>
        <ul>
          <li v-for="category in blog.categories" :key="category">{{category}}</li>
        </ul>
        <p>作者: {{blog.author}}</p>
      </div>

    </div>
</template>

<script>
  import axios from "axios"
    export default {
      // 测试地址
      // http://jsonplaceholder.typicode.com/
      // http://jsonplaceholder.typicode.com/posts
        name: 'add-blog',
        data() {
            return {
              blog:{
                title:'',
                content:'',
                categories:[],
                author:""
              },
              authors:["轻飘飘的旧时光","开水里游的鱼","左耳文件一缕香","Ann.青木"],
              submitted:false
            }
        },
      methods:{
          post:function(){
            axios.post("/post.json",this.blog)
              .then((data)=>{
              console.log(data);
              this.submitted = true
            })
          }
      }
    }
</script>


<style scoped>
  #add-blog *{
    box-sizing: border-box;
  }
  #add-blog{
    margin:20px auto;
    max-width:600px;
    padding:20px;
    /*border:1px solid black;*/
  }
  label{
    display:block;
    margin:20px 0 10px;
  }
  input[type="text"],textarea,select{
    display:block;
    width:100%;
    padding:8px;
  }
  textarea{
    height:200px;
  }
  #checkboxes label{
    display:inline-block;
    margin-top: 0;
  }
  #checkboxes input{
    display:inline-block;
    vertical-align: middle;
    margin-right:10px;
  }
  button{
    display:block;
    margin:20px 0;
    background:crimson;
    color:#fff;
    border:0;
    padding:12px;
    border-radius:4px;
    font-size:18px;
    cursor:pointer;
  }
  #preview{
    padding:10px 20px;
    border:1px dotted #ccc;
    margin:30px 0;
  }
  h3{
    margin-top: 10px;
  }

</style>
