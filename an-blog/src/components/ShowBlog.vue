<template>
    <div v-theme:column="'narrow'" id="show-blog">
      <h1>博客总览</h1>
      <input type="text" v-model="search" placeholder="搜索">
      <div class="single-blog" v-for="blog in filteredBlogs" :key="blog.title">
        <router-link :to="'/blog/'+ blog.id">
          <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
        </router-link>
        <article>
          {{blog.content | snippet}}
        </article>
      </div>
    </div>
</template>

<script>
  import axios from "axios"
    export default {
        name: 'Show-blog',
        data() {
            return {
              blogs:[],
              search:''
            }
        },
      created(){
          axios.get('/post.json')
            .then(function(data){
              return data.data
            })
            .then((data)=>{
              var blogsArray = [];
              for (let key in data){
                data[key].id = key;
                blogsArray.push(data[key])
              }
              this.blogs = blogsArray;
            })
      },
      computed:{
          filteredBlogs:function(){
            return this.blogs.filter((blog)=>{
              return blog.title.match(this.search)
            })
          }
      }
    }
</script>


<style scoped>
  #show-blog{
    max-width: 800px;
    margin: 0 auto;
  }
  .single-blog{
    padding:20px;
    margin:20px 0;
    box-sizing: border-box;
    background:#eee;
    border: 1px dotted #aaa;
  }
  #show-blog a{
    /*color:#444;*/
    text-decoration: none;
  }
  input[type='text']{
    padding:8px;
    width:100%;
    box-sizing: border-box;
    font-size: 20px;
  }
</style>
