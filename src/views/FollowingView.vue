<script>
import axios from "axios";

export default {
  name: "Following",
  data() {
    return {
      following: null,
    };
  },
    props:{
      username:{
        type: String,
        required: true,
      },
    },
    created: function () {
    axios.get(`https://api.github.com/users/${this.username}/following`).then((response) => {
      this.following = response.data;
      console.log(this.following);
    });
  },
}
</script>

<template>
  <div class="">
    <section class="">
      <div class="">
        <div class="container">
          <h1 class="title">Get GitHub User Following</h1>
          <h2 class="subtitle">using Vue JS, REST API</h2>
        </div>
      </div>
    </section>
    <div class="container">
      <div >
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Profile Image</th>
              <th>Username</th>
              <th>Type Of User</th>
              <!-- <th>Repos</th> -->
            </tr>
          </thead>
          <tbody>
            <tr v-for="f in following" v-bind:key="f.id">
              <td>{{ f.id }}</td>
              <td><img class="avatar" :src="f.avatar_url" alt="" width="50" height="50"></td>
              <td>{{ f.login }}</td>
              <td>{{ f.type }}</td>
              <!-- <td>{{}}</td> -->
              
              <!-- <td><RouterLink :to="{ name: 'followers', params: {username} }">Number of followers</RouterLink></td> -->
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style>

</style>