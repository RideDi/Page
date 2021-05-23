<template>
  <!--  <img class="logo" alt="Vue logo" src="./assets/logo.png">-->
  <div id="ParameterSetting">
    <div class="common-layout">
      <el-container>
        <el-header style="background-color: #10163b; width: 100%">
          <!--          舆情监控任务参数设置-->
          <el-row :gutter="10">
            <el-col><div style="font-size: 20px; color: snow">用户检测参数设置</div></el-col>
          </el-row>
        </el-header>
        <el-main style="height: 300px; padding-top: 50px; width: 100%">
          <el-form
            ref="form"
            :model="formLabelAlign"
            size="small"
            label-width="50%;"
            style="width: 50%; margin-left: 100px"
            :label-position="labelPosition"

          >
            <el-row :gutter="10">
              <el-col :span="30" :offset="12" style="color: snow; width: 100%">
                <el-form-item label="目标用户名" class="fontcolor">
                  <el-input
                    v-model="formLabelAlign.name"
                    placeholder="输入需要爬取的用户名"
                    style="color: snow; background-color: #667eea;width: 140px"
                    class="w-48"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="10" style="padding-top: 20px">
              <el-col :offset="7">
                <el-form-item label="时间戳设置">
                  <el-col>
                    <el-date-picker
                      type="date"
                      placeholder="选择开始日期"
                      v-model="formLabelAlign.date1"
                      style="width: 80%"
                    ></el-date-picker>
                  </el-col>
                  <el-col class="line" :span="1">-</el-col>
                  <el-col>
                    <el-date-picker
                      type="date"
                      placeholder="选择截止日期"
                      v-model="formLabelAlign.date2"
                      style="width: 80%"
                    ></el-date-picker>
                  </el-col>
                </el-form-item>
              </el-col>
            </el-row>
            <el-form-item style="padding-top: 30px">
              <el-button type="primary" @click="onSubmit">立即创建</el-button>
              <el-button type="">取消</el-button>
            </el-form-item>
          </el-form>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: "left",
      formLabelAlign: {
        name: "",
        region: "",
        date1: "",
        date2: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style scoped>
.content {
  width: auto;
}
button.el-button.el-button--primary.el-button--small {
  margin-left: 300px;
}

.el-form-item__label {
  color: snow;
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: snow;
  text-align: center;
  line-height: 60px;
}

.el-main {
  background-color: #546293;
  color: snow !important;
  text-align: center;
  line-height: 30px;
}

body > .el-container {
  margin-bottom: 40px;
}
/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*}*/
/*.logo {*/
/*  width: 50%;*/
/*}*/
</style>
