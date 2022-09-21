<template>
  <el-container>
    <el-aside width="200px">
      <el-row class="tac">
        <el-col :span="24">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-menu-item index="">
              <i class="el-icon-setting"></i>
              <span slot="title">Books one</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-setting"></i>
              <span slot="title">Books two</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-setting"></i>
              <span slot="title">Books three</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">Books four</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-aside>

    <el-main>
      <el-container>
        <el-header>
          <div id="shuru">
            <el-input v-model="input" placeholder="Please enter the content"></el-input>
          </div>
          <div id="chaxun">
            <el-button type="primary">Query</el-button>
            <el-button type="warning">Add</el-button>
          </div>
        </el-header>
        <el-main>
          <template>
            <el-table :data="tableData" style="width: 100%">
              <el-table-column prop="date" label="Date" width="180">
              </el-table-column>
              <el-table-column prop="name" label="BooksName" width="180">
              </el-table-column>
              <el-table-column prop="author" label="Author"> </el-table-column>
              <el-table-column
              fixed="right"
              label="Operation"
              width="100">
              <template slot-scope="scope">
               <el-button @click="handleClick(scope.row)" type="text" size="small">See</el-button>
               <el-button type="text" size="small">Edit</el-button>
              </template>
              </el-table-column>
            </el-table>
          </template>
        </el-main>
      </el-container>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "活着",
          author: "余华",
        },
        {
          date: "2016-05-04",
          name: "平凡的世界",
          author: "路遥",
        },
        {
          date: "2016-05-01",
          name: "围城",
          author: "钱钟书",
        },
        {
          date: "2016-05-03",
          name: "撒哈拉的故事",
          author: "三毛",
        },
      ],
      input: "",
    };
  },

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
#shuru {
  float: left;
}
#shuru > * {
  margin-top: 10px;
  /* display: inline-block; */
}
#chaxun > * {
  margin-top: 10px;
}
</style>