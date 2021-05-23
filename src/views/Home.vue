<template>
  <div class="container">
    <sidebar></sidebar>
    <!--    <div class="content">-->
    <!--&lt;!&ndash;      <img alt="Vue logo" src="../assets/ins_toolkit.png" style="display:inline-block;" />&ndash;&gt;-->
    <!--       <HelloWorld msg="Welcome to Instagram ToolKit." />-->
    <!--&lt;!&ndash;      <transition name="router-fade" mode="out-in">&ndash;&gt;-->
    <!--&lt;!&ndash;        <router-view></router-view>&ndash;&gt;-->
    <!--&lt;!&ndash;      </transition>&ndash;&gt;-->
    <!--    </div>-->
    <div class="contain pt-28 pb-1">
      <h1 class="flex flex-row justify-left font-bold h-16">Instagram 舆论综合检测分析平台</h1>
      <div class="flex flex-1 flex-row">
        <!-- PART1 -->
        <el-card class=" w-72 mx-8 h-60 card-line">
          <div class="">
            <div class="p-3 pb-5 flex justify-between flex-row-reverse">
              <i class="el-icon-user"></i>
              <div>
                <h2 class="mb-0 font-bold">近期正常用户检测数</h2>
                <span>{{ statisticTitle }}</span>
              </div>
            </div>

            <div
              class="line-area-chart"
              :id="analyticsData.NowadaysNormalAccount.id"
            >
              <VueApexCharts
                ref="apexChart"
                :type="type"
                height="140"
                width="100%"
                :options="analyticsData.NowadaysNormalAccount.chartOptions"
                :series="analyticsData.NowadaysNormalAccount.series"
              ></VueApexCharts>
            </div>
          </div>
        </el-card>
        <!-- PART2 -->
        <el-card class="box-card flex-shrink w-72 mx-3 h-60 card-line">
          <div class="">
            <div class="p-3 pb-0.5 flex justify-between flex-row-reverse">
              <!-- <feather-icon :icon="icon" class="p-3 inline-flex rounded-full" :class="[`text-${color}`, {'mb-4': !iconRight}]" :style="{background: `rgba(var(--vs-${color}),.15)`}"></feather-icon> -->
              <i class="el-icon-user-solid"></i>
              <div>
                <h2 class="mb-0 font-bold">近期机器人账户检测数</h2>
                <span>{{ statisticTitle }}</span>
              </div>
            </div>

            <div
              class="line-area-chart"
              :id="analyticsData.NowadaysFakeAccount.id"
            >
              <VueApexCharts
                ref="apexChart"
                :type="type"
                height="140"
                width="100%"
                :options="analyticsData.NowadaysFakeAccount.chartOptions"
                :series="analyticsData.NowadaysFakeAccount.series"
              ></VueApexCharts>
            </div>
          </div>
        </el-card>
      </div>


    </div>
    <div id="sec" class="contain pb-1">
      <div class="flex flex-1 flex-row" style="padding-left: 20px">
        <!-- PART3 -->
        <el-card class="box-card flex-shrink w-64 mx-3 h-80 card-line">
          <div class="flex justify-between flex-row-reverse">
            <i class="el-icon-s-custom mt-4"></i>
            <div>
              <h2 class="mb-1 font-bold mt-3">整体检测总量</h2>
            </div>
          </div>
          <div class="font-extrabold mt-4">
            <div class="mt-1.5">总体数据量：50037</div>
            <div class="mt-1.5">机器人总量：19593</div>
            <div class="mt-1.5">近期账号检测数量：6403</div>
            <div class="mt-1.5">近期机器人数量：2870</div>
          </div>
        </el-card>
        <el-card class="box-card flex-shrink mx-8 h-auto w-80 card-line" style="padding-left: 5px;padding-top: 10px">
          <div class="flex justify-between flex-row-reverse">
            <!-- <feather-icon :icon="icon" class="p-3 inline-flex rounded-full" :class="[`text-${color}`, {'mb-4': !iconRight}]" :style="{background: `rgba(var(--vs-${color}),.15)`}"></feather-icon> -->
            <i class="el-icon-help"></i>
            <div>
              <h2 class="mb-0 font-bold">历史检测统计结果</h2>
              <span>{{ statisticTitle }}</span>
            </div>
          </div>

          <div class="line-area-chart">
            <VueApexCharts
              type="radialBar"
              height="300"
              :options="analyticsData.TotalAccountAnalytics.chartOptions"
              :series="analyticsData.TotalAccountAnalytics.series"
            />
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import VueApexCharts from "vue3-apexcharts";
import { getCurrentInstance } from "vue";
import { defineComponent } from "vue";
import analyticsData from "../js/analytics/analyticsData";
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Sidebar from "@/components/Common/Sidebar.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld,
    sidebar: Sidebar,
    VueApexCharts,
  },
  data() {
    return {
      analyticsData: analyticsData,
    };
  },
};
// )
</script>

<style>
.container{
  max-width: 100%;
}

</style>

<style scoped>
/*body {*/
/*  background: #f5f7fa;*/
/*  display: block;*/
/*}*/

.container {
  height: 100%;
  width: 100%;
}

/*.content {*/
/*  box-sizing: border-box;*/
/*  padding: 70px 20px 20px 100px;*/
/*  min-height: 700px;*/
/*  overflow: auto;*/
/*}*/
.contain {
  padding-left: 480px;
  width: 120%;
  height: 435px;
  background: #262c49;
}
.card-line {
  background: #10163b;
  border: none;
  color: rgb(255, 255, 255);
}
h3 {
  margin: 40px 0 0;
}
h1 {
  font-size: 30px;
  color: snow;
  padding-left: 100px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
