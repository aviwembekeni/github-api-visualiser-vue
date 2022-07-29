<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Users from './views/UsersView.vue'

export default {
  name: 'App',
  components: {
    Users
  }
}
</script>

