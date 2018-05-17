<template>
  <div class="container">
    <div class="row mb-5">
      <div class="col-4">
        <router-link class="nav-link" :to="{name:'historyLink'}">
          <a class="list-group-item list-group-item-action">历史订单</a>
        </router-link>
        <router-link class="nav-link" :to="{name:'contactLink'}">
          <a class="list-group-item list-group-item-action">联系我们</a>
        </router-link>
        <router-link class="nav-link" :to="{name:'orderingGuideLink'}">
          <a class="list-group-item list-group-item-action">点餐文档</a>
        </router-link>
        <router-link class="nav-link" :to="{name:'deliveryLink'}">
          <a class="list-group-item list-group-item-action">快递信息</a>
        </router-link>
      </div>
      <div class="col-8">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>
