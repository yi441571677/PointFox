<template>
  <div id="headerBook">
     <div id="headerTitle">
         <span>
            {{message}}
         </span>
     </div>
     <div id="headerFunction">
              <el-row>
              <router-link to="/main">
              <el-button type="primary" disable>Syetem login</el-button>
              </router-link>
              <router-link to="/work">
              <el-button type="success" disable>Work centre</el-button>
              </router-link>
              <router-link to="/student">
              <el-button type="danger" disable>Student information</el-button>
              </router-link>
              <router-link to="/book">
              <el-button type="warning" disable>Book information</el-button>
              </router-link>
              <router-link to="/cnnode">
              <el-button type="info" disable>cnnode Forum</el-button>
              </router-link>
              </el-row>
     </div>
  </div>
</template>

<script>
export default {
    name:"headerBook",
    data(){
        return {
            message:"Jiangxi University of Software-Library management system"
        }
    }
}
</script>

<style>
#headerTitle{ 
    width: 400px;
    height: 60px;
    color:white;
    font-size: 20px;
    font-weight: bolder;
    line-height: 60px;
    display: inline-block;
        }
 #headerFunction{
            float: right;
            display: inline-block;
            line-height: 60px;
        }
 #headerFunction > .el-button {
            display: inline-block;
            margin-top: 8px;
            background-color: #0a9588;
            border-color: #0a9588;
        }

</style>