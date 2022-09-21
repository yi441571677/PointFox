<template>
  <div>
  <el-form :rules="rules" ref="loginForm" :model="loginForm" class="loginContainer">
     <h3 class="loginTitle">
       System login
     </h3>
      <el-form-item prop="username">
          <el-input type="text" v-model="loginForm.username" placeholder="Please enter your username" >
          </el-input>
      </el-form-item>
      <el-form-item prop="password">
          <el-input type="password" v-model="loginForm.password" placeholder="Please enter your password" >
          </el-input>
      </el-form-item>
      <el-checkbox v-model="checked" class="loginRemember">Remember</el-checkbox>
      <el-button type="primary" style="width:100%" @click="submitLogin">Login in </el-button>
  </el-form>
  </div>
</template>

<script>
export default {
  name: "Main",
    data(){
      return{
          captchaUrl: "",
          loginForm:{
              username:"admin",
              password:"123456"
          },
          checked: true,
          rules:{
              username:[{required:true,message:"Please enter your username",trigger:"blur"},{ min: 5, max: 14, message: 'Length ranges from 5 to 14 characters', trigger: 'blur' }
              ],
              password:[{required:true,message:"Please enter your password",trigger:"blur"},,{ min: 6,  message: 'The password length should be greater than 6', trigger: 'blur' }]
          }

      }
  },
    methods:{
      submitLogin(){
          this.$refs.loginForm.validate((valid) => {
              if (valid) {
                  alert('提交成功');
              } else {
                  this.$message.error('登录出错请重新输入');
                  return false;
              }
          });
      }
    }
};
</script>

<style>
    .loginContainer{
        border-radius: 15px;
        background-clip: padding-box;
        margin: 80px auto;
        width: 350px;
        padding: 15px 35px 15px 35px;
        background: aliceblue;
        border:1px solid blueviolet;
        box-shadow: 0 0 25px #f885ff;
    }
    .loginTitle{
        margin: 0px auto 48px auto;
        text-align: center;
        font-size: 40px;
    }
    .loginRemember{
        text-align: left;
        margin: 0px 0px 15px 10px;
    }
</style>