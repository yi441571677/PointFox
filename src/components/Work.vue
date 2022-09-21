<template>
  <el-row class="row">
    <div class="button">
      <router-link to="/student"
        ><el-button type="danger" round>Student information</el-button></router-link
      >
      <router-link to="/book"
        ><el-button type="warning" round>Book information</el-button></router-link
      >
      <router-link to="/cnnode"
        ><el-button type="info" round>cnnode Forum</el-button></router-link
      >
    </div>
  </el-row>
</template>

<script>
</script>

<style>
.row {
  height: 100%;
  text-align: center;
}
.button {
  height: 100%;
  line-height: 460px;
}
</style>