<script>
import axios from "axios";

export default {
  name: "Users",
  data() {
    return {
      users: null,
    };
  },
  created: function () {
    axios.get("https://api.github.com/search/users?q=test&page=1&per_page=10").then((response) => {
      this.users = response.data.items;
    });
  },
};
</script>

<template>
  <div class="users">
    <section class="">
      <div class="">
        <div class="container">
          <h1 class="title">Get GitHub Users</h1>
          <h2 class="subtitle">using Vue JS, REST API</h2>
        </div>
      </div>
    </section>
    <div class="container">
      <div >
        <table >
          <thead>
            <tr>
              <th>Username</th>
              <th>User Type</th>
              <th>Profile Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" v-bind:key="user.id">
              <td>{{ user.login }}</td>
              <td>{{ user.type }}</td>
              <td><img class="avatar" :src="user.avatar_url" alt="" width="50" height="50"></td>
              <td><RouterLink :to="{ name: 'user', params: {username: user.login} }">View</RouterLink></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style>

.avatar {
   
    -webkit-border-radius: 60px;
    -moz-border-radius: 60px;
    border-radius: 60px;
}

table {
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
}

table caption {
  font-size: 1.5em;
  margin: .5em 0 .75em;
}

table tr {
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: .35em;
}

table th,
table td {
  padding: .625em;
  text-align: center;
}

table th {
  font-size: .85em;
  letter-spacing: .1em;
  text-transform: uppercase;
}

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
	td:nth-of-type(1):before { content: "Username"; }
	td:nth-of-type(2):before { content: "User Type"; }
	td:nth-of-type(3):before { content: "Profile Image"; }
	td:nth-of-type(4):before { content: "Action"; }

}

</style>