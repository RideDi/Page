<template>
  <el-container style="height: 700px; border: 2px solid snow; background-color: #546293">
    <!--    <el-container>-->
    <el-header style="text-align: left; font-size: 20px; background-color: #10163b">
      <el-row :gutter="20">
        <el-col :span="3">
          <span style="color: snow">社群爬取</span>
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
        style="width: auto"
        :cell-style="cellStyle"
        :header-cell-style="{background:'#546293',color: 'snow'}"
        ref="multipleTable"
        tooltip-effect="dark"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="80" align="center"></el-table-column>
        <el-table-column prop="id" label="id" width="180" align="center"> </el-table-column>
        <el-table-column prop="name" label="用户名" width="180" align="center">
        </el-table-column>
        <el-table-column prop="na" label="用户昵称" width="180" align="center">
        </el-table-column>
        <el-table-column prop="state" label="状态" width="180" align="center">
          <el-tag type="success"
                  style="background-color: #667eea; color: snow;"
          >互相关注</el-tag>
        </el-table-column>
        <el-table-column prop="operation" label="操作" width="260" align="center">
          <template #default="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
                       class="text-gray-100 rounded-lg hover:bg-indigo-700 ease-in-out items-center justify-center bg-blue-500 "
            >编辑</el-button
            >
            <el-button
              size="mini"
              style="margin-left: 50px"
              class="text-gray-100 rounded-lg hover:bg-indigo-700 ease-in-out items-center justify-center bg-gray-700 "
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
  <!--  </el-container>-->
</template>

<script>
export default {
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      na: "xiaohu",
      address: "上海市普陀区金沙江路 1518 弄",
      id: 10000,
      state: "已完成",
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
