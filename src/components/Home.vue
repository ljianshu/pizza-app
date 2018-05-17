<template>
  <div>
    <div id="home" class="col-sm-12 text-center">
      <div class="background">
        <h1>欢迎大家品尝pizza！</h1>
        <h2>这里有你非常喜欢的pizza!</h2>
        <button class="btn btn-success" @click="orderMenu">Let's order！</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {
      orderMenu() {
        this.$router.push({name: "menuLink"})
      }
    }
  }
</script>
<style>
  #home {
    background:url("../assets/pizza.jpg");
    height:85vh;
    padding: 10%;
  }
  .background{
    opacity: 0.8;
    background: #eee;
    margin: 0 auto;
    padding: 20px 0;
    max-width: 70vw;
  }
  h1,h2{
    margin: 6%;
  }
</style>
