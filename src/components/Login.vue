<template>
  <div class="row mt-3">
    <div class="col-md-12 col-lg-12">
      <div class="card">
        <div class="card-body">
          <img class="mx-auto d-block" src="../assets/icon.png" alt="图标">
          <form @submit.prevent="onSubmit">
            <div class="form-group">
              <label for="email">邮箱</label>
              <input type="email" class="form-control" v-model="email" placeholder="请输入邮箱">
            </div>
            <div class="form-group">
              <label for="password">密码</label>
              <input type="password" class="form-control" v-model="password" placeholder="请输入密码">
            </div>
            <button type="submit" class="btn btn-success btn-block">登录</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios"

  export default {
    data() {
      return {
        email: "",
        password: ""
      }
    },
    beforeRouteEnter:(to,from,next)=>{
      next(vm=>vm.$store.dispatch("setUser",null))
    },
    methods: {
      onSubmit() {
        axios.get('/register.json').then(res => {
            let data = res.data;
            let registerDatas = []
            for (let key in data) {
              registerDatas.push(data[key])
            }

            let result = registerDatas.filter((registerData) => {
              return registerData.email === this.email && registerData.password === this.password
            })
            if (result != null && result.length > 0) {
             this.$store.dispatch("setUser",result[0].email)
              this.$router.push({name: "homeLink"})
            } else {
              alert("账号或密码错误")
              this.$store.dispatch("setUser", null)
            }
          }
        )
      }
    }

  }
</script>
