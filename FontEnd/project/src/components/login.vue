<script>
import axios  from 'axios';
export default {
    name:'login',
    data(){
        return{
            username:'',
            password:''
        }
    },
    methods:{
        async login(){
            try{
                const result= await axios.get(`http://localhost:8080/api/user/Login?UserName=${this.username}&pass=${this.password}`)
                if(result.status==200 && result.data.length>0){
                this.$router.push({name:'user.list'})
            }   
            }
         
            catch(ex){
                
                            alert("Đăng nhập thất bại rồi :( ")

            }

        }
    }
    }
</script>