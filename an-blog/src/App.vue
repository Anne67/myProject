<template>
  <div id="app">
    <!--<AddBlog></AddBlog>-->
    <!--<ShowBlog></ShowBlog>-->
    <BlogHeader></BlogHeader>
    <router-view></router-view>
  </div>
</template>

<script>
  import ShowBlog from './components/ShowBlog'
  import AddBlog from './components/AddBlog'
  import BlogHeader from './components/BlogHeader'

  export default {
    name: 'App',
    components: {
      AddBlog,
      ShowBlog,
      BlogHeader
    }
  }
</script>

<style>
  #app{
    height:1200px;
    background:url('./assets/2.jpg') no-repeat;
    background-size:100% 100%;
  }
</style>
