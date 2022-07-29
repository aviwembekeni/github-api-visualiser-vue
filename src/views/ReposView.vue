<script>
import axios from "axios";

export default {
  name: "Repos",
  data() {
    return {
      Repos: null,
    };
  },
  props:{
    username:{
      type: String,
      required: true,
    },
  },
  created: function () {
  axios.get(`https://api.github.com/users/${this.username}/repos`).then((response) => {
    this.repos = response.data;
    console.log(this.repos);
  });
  },
}
</script>

<template>
  <div class="">
    <section class="">
      <div class="">
        <div class="container">
          <h1 class="title">Get GitHub User Repos</h1>
          <h2 class="subtitle">using Vue JS, REST API</h2>
        </div>
      </div>
    </section>
    <div class="container">
      <div >
        <table >
          <thead>
            <tr>
              <th>Name</th>
              <th>Language</th>
              <!-- <th>Fullname</th>
              <th>Bio</th>
              <th>Number of followers</th> -->
            </tr>
          </thead>
          <tbody>
            <tr v-for="repo in repos" v-bind:key="repo.id">
              <!-- <td><img class="user-avatar" :src="user?.avatar_url" alt="" width="50" height="50"></td> -->
              <td>{{ repo.name != null? repo.name : repo.full_name }}</td>
              <td>{{ repo.language }}</td>
              <!-- <td>{{ user?.bio }}</td>
              <td><RouterLink :to="{ name: 'followers', params: {username} }">Number of followers</RouterLink></td> -->
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style>

</style>