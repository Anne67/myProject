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

}
</style>
