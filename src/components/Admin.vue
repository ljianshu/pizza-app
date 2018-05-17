<template>
  <div class="row">
    <div class="col-sm-12 col-md-8">
      <NewPizza></NewPizza>
    </div>
    <div class="col-sm-12 col-md-4">
      <h3 class="text-muted my-5">Menu:</h3>
      <table class="table">
        <thead class="table table-default">
        <tr>
          <th>品种</th>
          <th>删除</th>
        </tr>
        </thead>
        <tbody v-for="item in getMenuItems" :key="item.name">
        <tr>
          <td>{{item.name}}</td>
          <td>
            <button @click="deleteMenuItem(item)" class="btn btn-outline-danger btn-sm">&times;</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import axios from "axios"
  import NewPizza from "./NewPizza"

  export default {
    data() {
      return {}
    },
    components: {
      NewPizza: NewPizza
    },
    computed: {
      getMenuItems: {
        get() {
          return this.$store.getters.getMenuItems
        },
        set() {
        }
      }
    },
    methods: {
      deleteMenuItem(item) {
        axios.delete("/admin/" + item.id + "/.json")
          .then(res => this.$store.commit("removeMenuItems", item))
      }
    },
    created() {
      axios.get("/admin.json")
        .then(res => {
          let data = res.data
          let menuArray = []
          for (let index in data) {
            data[index].id = index
            menuArray.push(data[index])
          }
          this.$store.commit('setMenuItems', menuArray)
        })
    }
  }
</script>
