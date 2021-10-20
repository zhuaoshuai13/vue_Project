<template>
  <div id="app">
    <header>
      <router-view name="header"/>
    </header>
    <main>
      <router-view/>
    </main>
    <footer>
      <router-view name="footer"/>
    </footer>
  </div>
</template>
<script>

export default {
  components: {
  },
}
</script>
<style lang="less">
  html,body,#app{
    height: 100%;
  }
  #app{
    display: flex;
    flex-direction: column;
  }
  header{
    height: 50px;
  }
  main{
    flex: 1;
  }
  footer{
    height: 100px;
  }
</style>
