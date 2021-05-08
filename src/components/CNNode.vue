<template>
  <div id="cnnodeWrapper">
    <div>
      <span class="content">cnnode论坛</span>
    </div>
    <div>
      <li v-for="(value, index2) in this.topicsArr" :key="index2" class="content">
        <!-- <span>
          <img id="avatar" src="value.author" alt="" />
        </span> -->
        {{ value.title }}
      </li>
    </div>
    <div class="block content">
       <el-pagination
         layout="prev, pager, next"
         :total="50">
       </el-pagination>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      topicsArr: [],
    };
  },
  beforeCreated() {
    // console.log("this is before")
  },
  created() {
    let that = this;
    // console.log("this is vue")
    Axios.get("https://cnodejs.org/api/v1/topics").then(function (response) {
    //   console.log(response);
      that.topicsArr = response.data;
      if (response.data.success) {
        that.topicsArr = response.data.data;
      }
    });
  },
};
</script>

<style scoped>
#avatar {
  width: 20px;
  height: 20px;
}
/* .content {
  display: flex;
  justify-content: center;
  align-items: center;
} */
</style>