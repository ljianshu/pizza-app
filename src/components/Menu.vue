<template>
  <div class="row">
    <div class="col-sm-12 col-md-8">
      <table class="table">
        <thead class="thead-default">
        <tr>
          <th>尺寸</th>
          <th>价格</th>
          <th>加入</th>
        </tr>
        </thead>
        <tbody v-for="item in getMenuItems" :key="item.name">
        <tr>
          <td><strong>{{item.name}}</strong></td>
        </tr>
        <tr v-for="option in item.options" :key="option.size">
          <td>{{option.size+"寸"}}</td>
          <td>{{option.price+"RMB"}}</td>
          <td>
            <button @click="addMenuItem(item,option)" class="btn btn-sm btn-outline-success">+</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="col-sm-12 col-md-4" v-if="baskets.length>0">
      <table class="table">
        <thead>
        <tr>
          <th>数量</th>
          <th>品种</th>
          <th>价格</th>
        </tr>
        </thead>
        <tbody v-for="basket in baskets">
        <tr>
          <td>
            <button @click='decreaseQuantity(basket)' class="btn btn-sm ">-</button>
            {{basket.quantity}}
            <button @click='increaseQuantity(basket)' class="btn btn-sm ">+</button>
          </td>
          <td>{{basket.name+basket.size+'寸'}}</td>
          <td>{{basket.price*basket.quantity+"RMB"}}</td>
        </tr>
        </tbody>
      </table>
      <p>总价： {{total + "RMB"}}</p>
      <button class="btn btn-success btn-block ">提交</button>
    </div>
    <div class="col-md-4" v-else>
      <p>{{basketText}}</p>
    </div>

  </div>
</template>

<script>

  import axios from "axios"

  export default {
    data() {
      return {
        baskets: [],
        basketText: "购物车没有任何商品"
      }
    },
    methods: {
      addMenuItem(item, option) {
        let basket = {
          name: item.name,
          price: option.price,
          size: option.size,
          quantity: 1
        }
        if (this.baskets.length > 0) {
          let result = this.baskets.filter(basket => {
            return basket.price === option.price && basket.name === item.name
          })
          if (result != null && result.length > 0) {
            result[0].quantity++
          } else {
            this.baskets.push(basket)
          }

        } else {
          this.baskets.push(basket)
        }
      },
      increaseQuantity(basket) {
        basket.quantity++;
      },
      decreaseQuantity(basket) {
        basket.quantity--;
        if (basket.quantity <= 0) {
          this.baskets.splice(this.baskets.indexOf(basket), 1)
        }
      },
      fetchItems() {
        // fetch("https://wd2523271475puuiue.wilddogio.com/admin.json")
        //   .then(res => res.json())
        //   .then(data => this.getMenuItems = data)
        axios.get("/admin.json")
          .then(res=>{
           return this.$store.commit("setMenuItems",res.data)
          })
      }
    },
    created() {
      this.fetchItems()
    },
    computed: {
      getMenuItems(){
        return this.$store.state.menuItems
      },
      total() {
        let totalcost = 0;
        for (let basket of this.baskets) {
          totalcost += basket.quantity * basket.price
        }
        return totalcost;
      }
    }

  }
</script>
