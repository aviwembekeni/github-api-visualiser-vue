<script>
import axios from "axios";

export default {
  name: "User",
  data() {
    return {
      user: null,
    };
  },
    props:{
      username:{
        type: String,
        required: true,
      },
    },
    created: function () {
    axios.get(`https://api.github.com/users/${this.username}`).then((response) => {
      this.user = response.data;
      console.log(this.user);
    });
  },
}
</script>

<template>
  <div class="">
    <section class="">
      <div class="">
        <div class="container">
          <h1 class="title">Get GitHub User</h1>
          <h2 class="subtitle">using Vue JS, REST API</h2>
        </div>
      </div>
    </section>
    <div class="container">
      <div >
        <table >
          <thead>
            <tr>
              <th>Profile Image</th>
              <th>Username</th>
              <th>Fullname</th>
              <th>Bio</th>
              <th>Number of followers</th>
              <th>Number of following</th>
              <th>Number of repos</th>
              <th>Number of gists</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img class="avatar" :src="user?.avatar_url" alt="" width="50" height="50"></td>
              <td>{{ user?.login }}</td>
              <td>{{ user?.name ? user?.name: "No Name"}}</td>
              <td>{{ user?.bio }}</td>
              <td><RouterLink :to="{ name: 'followers', params: {username} }">{{user?.followers}}</RouterLink></td>
              <td><RouterLink :to="{ name: 'following', params: {username} }">{{user?.following}}</RouterLink></td>
              <td><RouterLink :to="{ name: 'repos', params: {username} }">{{user?.public_repos}}</RouterLink></td>
              <td><RouterLink :to="{ name: 'gists', params: {username} }">{{user?.public_gists}}</RouterLink></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style>

</style>