<template>
  <el-container style="height: 700px; border: 2px solid snow; background-color: #546293">
    <!--    <el-container>-->
    <el-header style="text-align: left; font-size: 20px; background-color: #10163b">
      <el-row :gutter="20">
        <el-col :span="3">
          <span style="color: snow">用户爬取</span>
        </el-col>
        <!--        <el-button type="primary" icon="el-icon-circle-plus-outline">新建任务</el-button>-->
        <el-col :offset="14" :span="2">
          <span style="color: snow">搜索</span>
        </el-col>
        <el-col :span="5">
          <span style="width: 40%; text-align: right"
            ><el-input placeholder="请输入内容" v-model="input" clearable>
            </el-input
          ></span>
        </el-col>
      </el-row>
    </el-header>

    <el-main>
      <el-table
        :data="tableData"
        border
        style="width: 100%"
        :cell-style="cellStyle"
        :header-cell-style="{background:'#546293',color: 'snow'}"
        ref="multipleTable"
        tooltip-effect="dark"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55" align="center"></el-table-column>
        <el-table-column prop="id" label="id" width="150" align="center"></el-table-column>
        <el-table-column prop="name" label="用户名" width="150" align="center"></el-table-column>
        <el-table-column prop="justWriting" label="正文" width="350%" align="center"></el-table-column>
        <el-table-column prop="numberOfComments" label="评论数" width="240" align="center"></el-table-column>
        <el-table-column prop="linksNum" label="点赞数" width="220" align="center"></el-table-column>
      </el-table>
    </el-main>
  </el-container>
  <!--  </el-container>-->
</template>

<script>
export default {
  data() {
    const item = {
      name: "BVB",
      justWriting: "Finished the season with a 💥",
      id: 666,
      numberOfComments: 22,
      linksNum: "4297"
    };
    return {
      tableData: Array(20).fill(item),
      multipleSelection: [],
    };
  },
  methods: {
    cellStyle({row,rowIndex}){
      if(rowIndex%2 === 1){
        return 'background: #546293'
      }else {
        return "background: #14182F"
      }
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    fileterTag(value, row) {
      return row.tag === value;
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleCheck(index, row) {
      console.log(index, row);
    },
  },
};
</script>

<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
.el-input {
  width: 120px;
  text-align: center;
}
</style>
