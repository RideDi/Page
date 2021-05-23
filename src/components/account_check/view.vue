<template>
  <div class="contain pt-16 pb-16">
    <div class="flex flex-1 flex-row justify-around">
      <!-- CARD 1: SUBSCRIBERS GAINED -->
      <el-card class="box-card flex-shrink w-80 mx-8 h-56 card-line">
        <div class="flex justify-between flex-row-reverse">
          <!-- <feather-icon :icon="icon" class="p-3 inline-flex rounded-full" :class="[`text-${color}`, {'mb-4': !iconRight}]" :style="{background: `rgba(var(--vs-${color}),.15)`}"></feather-icon> -->
          <i class="el-icon-s-custom"></i>
          <div>
            <h2 class="mb-1 font-bold">账户信息</h2>
            <span>{{ statisticTitle }}</span>
          </div>
        </div>
        <div class="block">
          <el-avatar
            shape="square"
            :size="50"
            src="https://images.pexels.com/photos/460666/pexels-photo-460666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          ></el-avatar>
        </div>
        <span class="font-extrabold">djvagerm</span>
        <div class="flex-1 font-extrabold mt-4">
          <span>粉丝数：15 </span>
          <span> 关注数：177</span>
        </div>
      </el-card>
      <el-card class="box-card flex-shrink w-80 mx-8 h-56 card-line">
        <!-- <div class=""> -->
        <div class="flex justify-between flex-row-reverse">
          <!-- <feather-icon :icon="icon" class="p-3 inline-flex rounded-full" :class="[`text-${color}`, {'mb-4': !iconRight}]" :style="{background: `rgba(var(--vs-${color}),.15)`}"></feather-icon> -->
          <i class="el-icon-date"></i>
          <div>
            <h2 class="mb-1 font-bold">近期发文统计</h2>
            <span>{{ statisticTitle }}</span>
          </div>
        </div>

        <div
          class="line-area-chart h-32 pt-8"
          :id="analyticsData.NowadaysPostData.id"
        >
          <VueApexCharts
            ref="apexChart"
            :type="type"
            height="100"
            width="100%"
            :options="analyticsData.NowadaysPostData.chartOptions"
            :series="analyticsData.NowadaysPostData.series"
          ></VueApexCharts>
        </div>
        <!-- </div> -->
      </el-card>
      <el-card class="box-card flex-shrink w-80 mx-8 h-56 card-line">
        <!-- <img src="../../assets/images/Word_Cloud.png" alt="" > -->
        <div class="pb-0 flex justify-between flex-row-reverse">
          <!-- <feather-icon :icon="icon" class="p-3 inline-flex rounded-full" :class="[`text-${color}`, {'mb-4': !iconRight}]" :style="{background: `rgba(var(--vs-${color}),.15)`}"></feather-icon> -->
          <i class="el-icon-chat-square"></i>
          <div>
            <h2 class="mb-1 font-bold">用户词云</h2>
          </div>
        </div>
        <div class="" style="text-align: center">
          <img
            style="margin: auto"
            class="h-32"
            src="../../assets/images/Word_Cloud.png"
          />
        </div>
      </el-card>
      <el-card class="box-card flex-shrink w-80 mx-8 h-56 card-line">
        <div class="h-56 w-auto" ref="echarts_check_result">
          <!-- <VueApexCharts
              type=radialBar height=250 :options="analyticsData.CheckResultBar.chartOptions" :series="analyticsData.CheckResultBar.series" 
            ></VueApexCharts> -->
        </div>
      </el-card>
    </div>
    <div class="flex flex-1 flex-row mt-16 justify-around">
      <el-card class="box-card flex-shrink mx-8 h-auto w-auto card-line">
        <div class="p-6 pb-0 flex justify-between flex-row-reverse">
          <!-- <feather-icon :icon="icon" class="p-3 inline-flex rounded-full" :class="[`text-${color}`, {'mb-4': !iconRight}]" :style="{background: `rgba(var(--vs-${color}),.15)`}"></feather-icon> -->
          <i class="el-icon-help"></i>
          <div>
            <h2 class="mb-1 font-bold">社群检测结果</h2>
          </div>
        </div>

        <div class="h-96 w-96 mt-4" ref="echarts_group_pie"></div>
      </el-card>
      <el-card class="box-card flex-shrink mx-8 h-auto w-100 card-line">
        <div class="">
          <div class="p-6 pb-0 flex justify-between flex-row-reverse">
            <!-- <feather-icon :icon="icon" class="p-3 inline-flex rounded-full" :class="[`text-${color}`, {'mb-4': !iconRight}]" :style="{background: `rgba(var(--vs-${color}),.15)`}"></feather-icon> -->
            <i class="el-icon-view"></i>
            <div>
              <h2 class="mb-1 font-bold">关系图谱</h2>
            </div>
          </div>

          <div
            class="flex-initial flex-shrink w-96 h-96 mx-8"
            ref="echarts_relative"
            style="z-index: 9"
          ></div>
        </div>
      </el-card>
      <!-- <el-card class="box-card flex-shrink mx-8 h-auto w-64 card-line">
        <div class="p-6 pb-0 flex justify-between flex-row-reverse">
            <i class="el-icon-chat-line-round"></i>
            <div>
              <h2 class="mb-1 font-bold">热词发现</h2>
              <span>{{ statisticTitle }}</span>
            </div>
          </div>
        <div>
        <el-timeline class="h-auto w-auto mt-4" >
          <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :icon="activity.icon"
            :type="activity.type"
            :color="activity.color"
            :size="activity.size"
            :timestamp="activity.timestamp"
            
          >
          <span class="text-white">{{ activity.content }}</span>
            
          </el-timeline-item>
        </el-timeline>
        </div>
      </el-card> -->
    </div>
    <div class="flex-1 flex-row mt-16 justify-around"></div>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
import { getCurrentInstance } from "vue";
import analyticsData from "../../js/analytics/analyticsData";
import graph from "../../json/echarts/les-miserables.json";
export default {
  data() {
    return {
      analyticsData: analyticsData,
      activities: [
        {
          content: "香港",
          timestamp: "2021-04-12 20:46",
          size: "large",
          type: "primary",
          icon: "el-icon-more",
        },
        {
          content: "Hong Kong",
          timestamp: "2021-04-03 20:46",
          color: "#0bbd87",
        },
        {
          content: "一国两制",
          timestamp: "2021-04-03 20:46",
          size: "large",
        },
        {
          content: "英国",
          timestamp: "2021-04-03 20:46",
        },
        {
          content: "立法",
          timestamp: "2021-04-12 20:46",
          size: "large",
          type: "primary",
          icon: "el-icon-more",
        },
        {
          content: "引渡",
          timestamp: "2021-04-03 20:46",
          color: "#0bbd87",
        },
        {
          content: "港独",
          timestamp: "2021-04-03 20:46",
          size: "large",
        },
        {
          content: "警察",
          timestamp: "2021-04-03 20:46",
        },
      ],
    };
  },
  components: {
    VueApexCharts,
  },
  // setup(){

  // },
  mounted() {
    const { proxy } = getCurrentInstance();
    var chartDom = proxy.$refs.echarts_group_pie;
    var myChart = proxy.$echarts.init(chartDom);
    var option;

    option = {
      tooltip: {
        trigger: "item",
      },
      legend: {
        top: "5%",
        left: "center",
        textStyle: {
          color: "#FFFFFF",
        },
      },
      series: [
        {
          name: "djvagerm的社群",
          type: "pie",
          top: 30,
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: "#fff",
            borderWidth: 2,
          },
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "10",
              fontWeight: "bold",
              color: "#FFFFFF",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 1048, name: "普通用户" },
            { value: 735, name: "机器人用户" },
            { value: 580, name: "反动用户" },
          ],
        },
      ],
    };

    option && myChart.setOption(option);
    var sec_chartDom = proxy.$refs.echarts_relative;
    var new_myChart = proxy.$echarts.init(sec_chartDom);
    var new_option;
    console.log(graph);
    graph.nodes.forEach(function (node) {
      node.label = {
        show: node.symbolSize > 30,
      };
    });
    new_option = {
      title: {
        text: "Les Miserables",
        subtext: "Default layout",
        top: "bottom",
        left: "right",
      },
      tooltip: {},
      legend: [
        {
          // selectedMode: 'single',
          data: graph.categories.map(function (a) {
            return a.name;
          }),
          textStyle: {
            color: "#ffff",
          },
        },
      ],
      animationDuration: 1500,
      animationEasingUpdate: "quinticInOut",
      series: [
        {
          name: "Les Miserables",
          type: "graph",
          layout: "none",

          data: graph.nodes,
          links: graph.links,
          categories: graph.categories,
          roam: true,
          label: {
            position: "right",
            formatter: "{b}",
          },
          lineStyle: {
            color: "source",
            curveness: 0.3,
          },
          emphasis: {
            focus: "adjacency",
            lineStyle: {
              width: 10,
            },
          },
        },
      ],
    };

    // new_myChart.setOption(new_option);
    new_option && new_myChart.setOption(new_option);
    var checkchartDom = proxy.$refs.echarts_check_result;
    var mycheckChart = proxy.$echarts.init(checkchartDom);
    var checkoption;

    checkoption = {
      series: [
        {
          type: "gauge",
          axisLine: {
            lineStyle: {
              width: 30,
              color: [
                [0.3, "#67e0e3"],
                [0.7, "#37a2da"],
                [1, "#fd666d"],
              ],
            },
          },
          pointer: {
            itemStyle: {
              color: "auto",
            },
          },
          axisTick: {
            distance: -30,
            length: 8,
            lineStyle: {
              color: "#fff",
              width: 2,
            },
          },
          splitLine: {
            distance: -30,
            length: 30,
            lineStyle: {
              color: "#fff",
              width: 2,
            },
          },
          axisLabel: {
            color: "auto",
            distance: -20,
            fontSize: 8,
          },
          detail: {
            valueAnimation: true,
            formatter: "{value}%",
            color: "auto",
            fontSize: 15,
          },
          data: [
            {
              value: 70,
            },
          ],
        },
      ],
    };
    checkoption && mycheckChart.setOption(checkoption);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contain {
  margin-left: 20px;
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
