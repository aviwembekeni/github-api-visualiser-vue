<script>
import axios from "axios";

export default {
  name: "Followers",
  data() {
    return {
      followers: null,
    };
  },
    props:{
      username:{
        type: String,
        required: true,
      },
    },
    created: function () {
    axios.get(`https://api.github.com/users/${this.username}/followers`).then((response) => {
      this.followers = response.data;
      console.log(this.followers);
    });
  },
}
</script>

<template>
  <div class="">
    <section class="">
      <div class="">
        <div class="container">
          <h1 class="title">Get GitHub User Followers</h1>
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
            <tr v-for="follower in followers" v-bind:key="follower.id">
              <td>{{ follower.id }}</td>
              <td><img class="avatar" :src="follower.avatar_url" alt="" width="50" height="50"></td>
              <td>{{ follower.login }}</td>
              <td>{{ follower.type }}</td>
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

@media screen and (max-width: 600px) {
  	/* Force table to not be like tables anymore */
	table, thead, tbody, th, td, tr { 
		display: block; 
	}
	
	/* Hide table headers (but not display: none;, for accessibility) */
	thead tr { 
		position: absolute;
		top: -9999px;
		left: -9999px;
	}
	
	tr { border: 1px solid #ccc; }
	
	td { 
		/* Behave  like a "row" */
		border: none;
		border-bottom: 1px solid #eee; 
		position: relative;
		padding-left: 50%; 
	}
	
	td:before { 
		/* Now like a table header */
		position: absolute;
		/* Top/left values mimic padding */
		top: 6px;
		left: 6px;
		width: 45%; 
		padding-right: 10px; 
		white-space: nowrap;
	}
	
	/*
	Label the data
	*/
	td:nth-of-type(1):before { content: "ID"; }
	td:nth-of-type(2):before { content: "Profile Image"; }
	td:nth-of-type(3):before { content: "User name"; }
	td:nth-of-type(4):before { content: "User Type"; }

}

</style>