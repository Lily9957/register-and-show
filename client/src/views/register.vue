<template>
  <div class="register-wrapper">
    <div class="form-wrapper">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item label="昵称">
          <el-input v-model="form.nickname"></el-input>
        </el-form-item>
        <el-button type="primary" @click="handleData">提交</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Register',
  data() {
    return {
      form: {
        username: '',
        password: '',
        nickname: ''
      }
    }
  },
  methods: {
    handleData(){
      axios.post('/user', {
        username: this.form.username,
        password: this.form.password,
        nickname: this.form.nickname
      })
    }
  },
}
</script>

<style scoped>
.register-wrapper {
  display: flex;
}
</style>

