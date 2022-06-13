<template>
  <h1>TRANG ĐĂNG NHẬP</h1>
  <h2></h2>
  <div class="content">
    <form class="form">
      <fieldset>
        <legend>LOGIN</legend>
        <div class="row">
          <label for="">Username</label>
          <input
            type="text"
            placeholder="username"
            required
            v-model="username"
          />
        </div>

        <div class="row">
          <label for="">Password</label>
          <input
            type="text"
            placeholder="password"
            required
            v-model="password"
          />
        </div>

        <div class="sub">
          <button v-on:click="login"><b>Đăng nhập</b></button>
        </div>
      </fieldset>
    </form>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login(e) {
      e.preventDefault();
     try {
        const result = await axios.get(
          `http://localhost:8080/api/user/Login?UserName=${this.username}&pass=${this.password}`
        );

        if (result.status == 200 && result.data.length > 0) {
          this.$router.push({ name: "user.list" });
        }
      } catch (ex) {
        alert("Đăng nhập thất bại rồi :( ");
      }
    },
  },
};
</script>

<style>
* {
  margin: 0px;
  padding: Opx;
}
.content {
  margin: 20px auto;
  width: 500px;
  background-color: rgb(187, 209, 241);
  border: 1px solid rgb(14, 13, 13);
}
.content fieldset {
  background-color: white;
  border: 1px solid rgb(221, 196, 196);
}

.content fieldset legend {
  font-size: 30px;
  font-weight: bold;
  padding: 20px;
  color: rgb(58, 9, 206);
}
.content fieldset div.row {
  margin: 0px;
  float: right;
}
.content fieldset div.row label {
  margin-left: 20px;
  text-align: right;
}
.content fieldset div.row input[type="text"] {
  margin: 10px;
  width: 300px;
}
.sub {
  margin-top: 150px;
  background-color: rgb(187, 209, 241);
  height: 40px;
  color: crimson;
}

input[type="text"] {
  width: 25%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: none;
  border-radius: 10px;
  background-color: #dedbee;
  color: rgb(9, 9, 9);
}

button {
  border-radius: 10px;
  background-color: #33257b; /* màu của Quản trị mạng ^^ */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 20px;
}
button {
  border-radius: 10px;
  background-color: #33257b; /* màu của Quản trị mạng ^^ */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 20px;
}
table {
  margin-top: 20px;
  border: 1px solid rgb(3, 26, 94);
  width: 100%;
  background-color: rgb(229, 236, 243);
}
h3 {
  float: right;
  margin: 10px 50px 10px 0px;
} 
th {color: rgb(249, 249, 249);
  background-color: #33257b;
  border: 1px solid rgb(248, 242, 242);
  height: 50px;
  font-size: larger;
}
td {
  border: 1px solid black;
}
tr:hover {
  background-color: #6794e9;
}
a {
  color: rgb(24, 6, 161);
  text-decoration: none;
  font-size: larger;
}
</style>