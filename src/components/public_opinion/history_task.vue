<template>
  <div class="content-page" style="background-color: #10163b">
    <div class="content-nav px-16 py-16">
      <el-breadcrumb class="breadcrumb" separator="/" style="color: snow">
        <el-breadcrumb-item :to="{ path: '/home' }" style="color: snow">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/index'}">舆情监控</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/histoty_task'}">历史任务</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="content-main">
      <div class="filter-box" style="">
        <el-form :inline="true" :model="filterForm" class="demo-form-inline">
          <el-form-item label="用户名">
            <el-input v-model="filterForm.name" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmitFilter">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="form-table-box">
        <el-table :data="tableData" style="width: 100%" border stripe :cell-style="cellStyle" :header-cell-style="{background:'#546293',color: 'snow'}">
          <el-table-column prop="id" label="ID" width="80"> </el-table-column>
          <el-table-column prop="realName" label="任务名称"> </el-table-column>
          <el-table-column prop="userName" label="用户名"> </el-table-column>
          <el-table-column prop="start_time" label="开始时间"> </el-table-column>
          <el-table-column prop="State" label="状态"> </el-table-column>
          <el-table-column prop="end_time" label="结束时间"> </el-table-column>
          <el-table-column label="操作" width="150px">
            <el-button
              size="small"
              @click="handleRowEdit(scope.$index, scope.row)"
              class="text-gray-100 rounded-lg hover:bg-indigo-700 ease-in-out items-center justify-center bg-blue-500 "
            >编辑</el-button
            >
            <el-button
              size="small"
              @click="handleRowDelete(scope.$index, scope.row)"
              class="text-gray-100 rounded-lg hover:bg-indigo-700 ease-in-out items-center justify-center bg-gray-700 "

            >删除</el-button
            >
          </el-table-column>
        </el-table>
      </div>
      <div class="page-box">
        <el-pagination
          @current-change="handlePageChange"
          :current-page="page"
          :page-size="10"
          layout="total, prev, pager, next, jumper"
          :total="total"
        >
        </el-pagination>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      total: 0,
      filterForm: {
        name: "",
      },
      tableData: [
        {
          id: "001",
          realName: "xxx",
          userName: "SereiX_N",
          start_time: "2021-04-20",
          end_time: "2021-04-25",
          State: "Finished",

        }, {
          id: "001",
          realName: "xxx",
          userName: "SereiX_N",
          start_time: "2021-04-20",
          end_time: "2021-04-25",
          State: "Finished",

        }
      ],
    };
  },

  components: {},
  methods: {
    cellStyle({row, rowIndex}){
      if(rowIndex%2 === 1){
        return 'background: #546293'
      }else {
        return "background: #14182F"
      }
    }
  }
};
</script>

<style>
.cell {
  color: snow;
  font-size: 15px;
}
.el-breadcrumb__inner.is-link {
  color: snow;
}
.el-pagination__total {
  color: snow;
}
.el-pagination__jump {
  color: snow;
}
.el-input__inner {
  /*background-color: burlywood;*/
}
.el-pagination button:disabled{
  /*background-color: red;*/
}
.btn-next{
  /*background-color: red;*/
}
.btn-prev{
  /*background-color: red;*/
}
</style>

<style scoped>
body {
  background-color: #ffffff;
}
.content-page {
  background-color: #ffffff;
}
</style>
