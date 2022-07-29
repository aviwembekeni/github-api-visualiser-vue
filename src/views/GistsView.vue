<script>
import axios from "axios";

export default {
  name: "Gists",
  data() {
    return {
      gists: null,
    };
  },
    props:{
      username:{
        type: String,
        required: true,
      },
    },
    created: function () {
    axios.get(`https://api.github.com/users/${this.username}/gists`).then((response) => {
      this.gists = response.data;
      console.log(this.gists);
    });
  },
}
</script>

<template>
  <div class="">
    <section class="">
      <div class="">
        <div class="container">
          <h1 class="title">Get GitHub User Gists</h1>
          <h2 class="subtitle">using Vue JS, REST API</h2>
        </div>
      </div>
    </section>
    <div class="container">
      <div >
        <!-- <table >
          <thead>
            <tr>
              <th>Profile Image</th>
              <th>Username</th>
              <th>Fullname</th>
              <th>Bio</th>
              <th>Number of followers</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img class="user-avatar" :src="user?.avatar_url" alt="" width="50" height="50"></td>
              <td>{{ user?.login }}</td>
              <td>{{ user?.name ? user?.name: "No Name"}}</td>
              <td>{{ user?.bio }}</td>
              <td><RouterLink :to="{ name: 'followers', params: {username} }">Number of followers</RouterLink></td>
            </tr>
          </tbody>
        </table> -->
      </div>
    </div>
  </div>
</template>

<style>

</style>