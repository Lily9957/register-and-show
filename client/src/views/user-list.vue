<template>
  <div class="user-list">
    <h2>{{userList}}</h2>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'UserList',
  data() {
    return {
      userList: null
    }
  },
  async created() {
    const result = await axios.get('/user')
    this.userList = result.data
  },
}
</script>

<style scoped>
.user-list {
  display: flex;
  justify-content: center;
}

</style>>
