
<template>
  <form @submit.prevent="save()">
  <h1>Điền thông tin</h1>
  <div>
  <label ><b>Username </b></label>
   <input type="text"  placeholder="username"  required
    v-model="user.username"
   >
   </div>
  <br>
  
  <label><b>password </b></label>
  <input type="password" placeholder="password"  required
   v-model="user.password"
  >

   
  <br>
  <div><button type="submit">Lưu </button></div>
  </form>
 

 <router-link to="/user">Quay lại</router-link>
</template>

<!-- <script>
/* eslint-disable vue/no-unused-components */
export default {
  name: 'UserForm',

  props:{
    itemEdit:{
      type : Object,
      default: null
    }
  },

  watch:{
    itemEdit(){
      if(this.itemEdit){
      this.user= Object.assign({},this.itemEdit)
    }else{
      this.user={}
      }
    }
  
  },
  
  methods:{
    clickAdd(){
      // this.$emit("save",this.user),
      console.log(this.user)
        this.$request.post('https://localhost:44316/api/user',this.user).then((response) => {
        // this.$router.push({name:'user.list'})
        console.log(response.data)
      })
      this.user={
        username:"",
        password:"",
      }
    }
  },
  data(){
    return{
      user:{
        username:"",
        password:"",
      }
    }
  }

}
</script> -->

<style> 
input[type=text],[type=password] {
  width: 25%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: none;
  border-radius: 10px;
  background-color: #dedbee;
  color: rgb(9, 9, 9)
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
</style>

<script>
    export default{
       name: 'UserForm',
       data(){
          return{
            user:{
              username:'',
              password:''
            }
          }
       },
       created(){
         let userId = this.$route.params.id
         console.log(userId)
         if(userId){
            this.getUser(userId)
         }
       },

       methods:{
          save(){
            if(this.$route.params.id){
              this.$request.put(`http://localhost:8080/api/user/${this.user.id}`, this.user).then( response=> {
                this.$router.push({name:'user.list'})
                alert('Thêm thành công')
                return
          }),
          // trở lại trống khi thêm, có thể thêm nhiều
            this.user={
            username:"",
            password:"",
            }
              return
            }
            console.log(this.user),
            this.$request.post('http://localhost:8080/api/user', this.user).then( response=> {
          }),
           alert('Đã thêm thành công !')
          // trở lại trống khi thêm, có thể thêm nhiều
            this.user={
            username:"",
            password:"",
      }
       },
         getUser(userId){
           this.$request.get(`http://localhost:8080/api/user/${userId}`).then(res =>{
                       this.user = res.data
                })
         }
       }
    }
</script>

 
