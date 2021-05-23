<template>
  <div style="padding-left: 150px">
  <div id="ParameterSetting" >
    <div class="common-layout">
      <el-container>
        <el-header style="background-color: #10163b; width: 80%">
          <el-row :gutter="20">
            <el-col><div style="font-size: 25px; color: snow">舆情监控参数介绍</div></el-col>
          </el-row>
        </el-header>
      </el-container>
    </div>
  </div>
  <el-table :data="tableData" :cell-style="cellStyle" border style="width: 80%;" :header-cell-style="{background:'#546293',color: 'snow'}">
    <el-table-column prop="parameterName" label="参数名" class="justify-center" :style="{background: '#10163b',color:'snow'}">
    </el-table-column>
    <el-table-column prop="parameterIntroduce" label="参数属性" class="justify-center w-auto">
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          parameterName: "属地模式",
          parameterIntroduce: "属地模式即为可以根据输入地点，针对地点的",
        },
        {
          parameterName: "全局模式",
          parameterIntroduce: "即对全局进行舆情监测",
        },
        {
          parameterName: "时间戳",
          parameterIntroduce: "设置时间戳可以对这段时间的舆情进行监控",
        },
      ],
    };
  },
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

<style scoped>
.el-table{
  background: #546293;
  color: snow !important;
}

</style>
