<template>
    <div id="single-blog">
      <h1>{{blog.title}}</h1>
      <article>{{blog.content}}</article>
      <p>作者: {{blog.author}}</p>
      <p>分类:</p>
      <ul>
        <li v-for="category in blog.categories" :key="category">
          {{category}}
        </li>
      </ul>
    </div>
</template>

<script>
  import axios from "axios"
    export default {
      name: 'single-blog',
      data() {
          return {
            id:this.$route.params.id, //路由参数
            blog:{

            }
          }
      },
      created(){
          axios.get('/post/' + this.id + ".json" )
            .then((data)=>{
              this.blog = data.data;
            })
      },
      methods:{

      }
    }
</script>


<style scoped>
  #single-blog{
    max-width: 960px;
    margin: 0 auto;
    padding:20px;
    background: #eee;
    border: 1px dotted #aaa;
  }
</style>
