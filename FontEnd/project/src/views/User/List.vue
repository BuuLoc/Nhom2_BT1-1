<template>
<router-link to="/user/create"><h2><a href="#">Thêm User</a></h2></router-link>
<h3><router-link to="/">Đăng xuất</router-link></h3>

<table >
    <thead>
      <tr>
        <th>Id</th>
        <th>UserName</th>
        <th>PassWord</th>
        <th>Chức Năng</th> 
      </tr>
    </thead>
    <tbody>
    <tr v-for="item in users" :key="item.id" >
      <td>{{item.id}}</td>
      <td>{{item.username}}</td>
      <td>{{item.password}}</td>
      <td>
        <router-link :to="{name:'user.edit', params: {id:item.id}}">
          <button >Sửa</button>
        </router-link>
        <button @click="onDelete(item.id)">Xóa</button>
      </td>
    </tr> 
    </tbody>
  </table>

</template>
<style>
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
table{
    margin-top: 20px;
    border:1px solid rgb(3, 26, 94);
    width: 100%;
    background-color:rgb(229, 236, 243);
}
h3{
  float: right;
  margin: 10px 50px 10px 0px;
}
th{ color: rgb(249, 249, 249);
    background-color:#33257b;
    border:1px solid rgb(248, 242, 242);
    height: 50px;
    font-size: larger;
}
td{
    border:1px solid black;
}
tr:hover {background-color: #aac0d0;}
a{
    color: rgb(24, 6, 161);
    text-decoration: none;
    font-size:larger;
}

</style>
<script>
export default {
   name: 'User',
  data(){
    return{
      users:[]
    }
  },
  created(){
    this.getAll();
  },
  methods: {
    getAll() {
      // or
      this.$request.get('http://localhost:8080/api/user').then((response) => {
        this.users = response.data
      })
    },
    onDelete(userId){
            this.$swal.fire({
              title: 'Bạn có chắc xóa',
              showDenyButton: false,
              showCancelButton: true,
              confirmButtonText: 'Delete',
            }).then((result) => {
              /* Khi nhấn nút xóa */
              if (result.isConfirmed) {
                this.$request.delete(`http://localhost:8080/api/user/${userId}`).then(res =>{
                       this.getAll(),
                       this.$swal.fire('Delete','Xóa thành công!')

                })
              } 
            })
            

    }, // Lấy thông tin user trước khi sửa

} }
</script>




<!-- <script>
export default {
  name: 'User',
  data(){
    return{
      users:[]
    }
  },
  created(){
    this.getAll();
  },
  methods:{
    getAll(){
      this.$request.get('localhost:44316/api/user').then( res=> {
        console.log(res.data)
      })
    }
  }
}
</script> -->