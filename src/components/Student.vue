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
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>Student one</span>
              </template>
              <el-menu-item-group>
                <template slot="title">Groups one</template>
                <el-menu-item index="1-1">Option one</el-menu-item>
                <el-menu-item index="1-2">Option two</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Groups two">
                <el-menu-item index="1-3">Option three</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">Option four</template>
                <el-menu-item index="1-4-1">Son option one</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">Student two</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">Student three</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">Student four</span>
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
              <el-table-column prop="name" label="Name" width="180">
              </el-table-column>
              <el-table-column prop="sex" label="Sex"> </el-table-column>
              <el-table-column prop="age" label="Age"> </el-table-column>
              <el-table-column prop="classes" label="Classes"> </el-table-column>
              <el-table-column fixed="right" label="Operation" width="100">
                <template slot-scope="scope">
                  <el-button
                    @click="handleClick(scope.row)"
                    type="text"
                    size="small"
                    >See</el-button
                  >
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
          name: "张三",
          sex: " 男",
          age:"20",
          classes:"B190101"
        },
        {
          date: "2016-05-04",
          name: "小明",
          sex: " 男",
          age:"21",
          classes:"B190102"
        },
        {
          date: "2016-05-01",
          name: "小红",
          sex: " 女",
          age:"18",
          classes:"B190105"
        },
        {
          date: "2016-05-03",
          name: "李四",
          sex: " 男",
          age:"24",
          classes:"B190110"
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