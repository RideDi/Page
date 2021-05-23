<template>
  <div class="contain pt-16 pb-16">
    <div class="flex flex-1 flex-row">
<!--      &lt;!&ndash; PART1 &ndash;&gt;-->
<!--      <el-card class="box-card flex-shrink w-72 mx-3 h-64 card-line">-->
<!--        <div class="">-->
<!--          <div class="p-3 pb-5 flex justify-between flex-row-reverse">-->
<!--            <i class="el-icon-user"></i>-->
<!--            <div>-->
<!--              <h2 class="mb-0 font-bold">近期正常用户检测数</h2>-->
<!--              <span>{{ statisticTitle }}</span>-->
<!--            </div>-->
<!--          </div>-->

<!--          <div-->
<!--            class="line-area-chart"-->
<!--            :id="analyticsData.NowadaysNormalAccount.id"-->
<!--          >-->
<!--            <VueApexCharts-->
<!--              ref="apexChart"-->
<!--              :type="type"-->
<!--              height="140"-->
<!--              width="100%"-->
<!--              :options="analyticsData.NowadaysNormalAccount.chartOptions"-->
<!--              :series="analyticsData.NowadaysNormalAccount.series"-->
<!--            ></VueApexCharts>-->
<!--          </div>-->
<!--        </div>-->
<!--      </el-card>-->
<!--      &lt;!&ndash; PART2 &ndash;&gt;-->
<!--      <el-card class="box-card flex-shrink w-72 mx-3 h-64 card-line">-->
<!--        <div class="">-->
<!--          <div class="p-3 pb-0.5 flex justify-between flex-row-reverse">-->
<!--            &lt;!&ndash; <feather-icon :icon="icon" class="p-3 inline-flex rounded-full" :class="[`text-${color}`, {'mb-4': !iconRight}]" :style="{background: `rgba(var(&#45;&#45;vs-${color}),.15)`}"></feather-icon> &ndash;&gt;-->
<!--            <i class="el-icon-user-solid"></i>-->
<!--            <div>-->
<!--              <h2 class="mb-0 font-bold">近期机器人账户检测数</h2>-->
<!--              <span>{{ statisticTitle }}</span>-->
<!--            </div>-->
<!--          </div>-->

<!--          <div-->
<!--            class="line-area-chart"-->
<!--            :id="analyticsData.NowadaysFakeAccount.id"-->
<!--          >-->
<!--            <VueApexCharts-->
<!--              ref="apexChart"-->
<!--              :type="type"-->
<!--              height="140"-->
<!--              width="100%"-->
<!--              :options="analyticsData.NowadaysFakeAccount.chartOptions"-->
<!--              :series="analyticsData.NowadaysFakeAccount.series"-->
<!--            ></VueApexCharts>-->
<!--          </div>-->
<!--        </div>-->
<!--      </el-card>-->
<!--      &lt;!&ndash; PART3 &ndash;&gt;-->
<!--      <el-card class="box-card flex-shrink w-56 mx-3 h-72 card-line">-->
<!--        <div class="flex justify-between flex-row-reverse">-->
<!--          <i class="el-icon-s-custom mt-4"></i>-->
<!--          <div>-->
<!--            <h2 class="mb-1 font-bold mt-3">整体检测总量</h2>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="font-extrabold mt-4">-->
<!--          <div class="mt-0.5">总体数据量：50037</div>-->
<!--          <div>机器人总量：19593</div>-->
<!--          <div class="mt-0.5">近期账号检测数量：6403</div>-->
<!--          <div class="mt-0.5">近期机器人数量：2870</div>-->
<!--        </div>-->
<!--      </el-card>-->
    </div>
    <div class="w-12 h-10"></div>
    <div class="flex flex-1 flex-row">
      <el-card class="box-card flex-shrink mx-5 h-auto w-auto card-line">
        <div class="p-6 pb-0 flex justify-between flex-row-reverse">
          <!-- <feather-icon :icon="icon" class="p-3 inline-flex rounded-full" :class="[`text-${color}`, {'mb-4': !iconRight}]" :style="{background: `rgba(var(--vs-${color}),.15)`}"></feather-icon> -->
          <i class="el-icon-help"></i>
          <div>
            <h2 class="mb-1 font-bold">历史检测统计结果</h2>
            <span>{{ statisticTitle }}</span>
          </div>
        </div>

        <div class="">
          <VueApexCharts
            type="radialBar"
            height="370"
            :options="analyticsData.TotalAccountAnalytics.chartOptions"
            :series="analyticsData.TotalAccountAnalytics.series"
          />
        </div>
      </el-card>
      <el-card class="box-card flex-shrink mx-8 h-auto w-auto card-line">
        <div class="">
          <div class="p-6 pb-0 flex justify-between flex-row-reverse">
            <!-- <feather-icon :icon="icon" class="p-3 inline-flex rounded-full" :class="[`text-${color}`, {'mb-4': !iconRight}]" :style="{background: `rgba(var(--vs-${color}),.15)`}"></feather-icon> -->
            <i class="el-icon-view"></i>
            <div>
              <h2 class="mb-1 font-bold">关系图谱</h2>
              <span>{{ statisticTitle }}</span>
            </div>
          </div>

          <div
            class="flex-initial flex-shrink max-w-sm w-96 h-96 mx-8 my-5"
            ref="echarts_relative"
            style="z-index: 9"
          ></div>
        </div>
      </el-card>

      <el-card class="box-card flex-shrink mx-1.5 h-auto w-64 card-line">
        <div class="p-6 pb-0 flex justify-between flex-row-reverse">
          <!-- <feather-icon :icon="icon" class="p-3 inline-flex rounded-full" :class="[`text-${color}`, {'mb-4': !iconRight}]" :style="{background: `rgba(var(--vs-${color}),.15)`}"></feather-icon> -->
          <i class="el-icon-chat-line-round"></i>
          <div>
            <h2 class="mb-1 font-bold">热词发现</h2>
            <span>{{ statisticTitle }}</span>
          </div>
        </div>
        <div>
          <el-timeline class="h-auto w-auto mt-4">
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
      </el-card>
    </div>
    <div class="w-12 h-10"></div>
    <div class="flex flex-1 flex-row">
      <el-card class="box-card flex-shrink w-auto mx-3 h-auto card-line">
        <div class="flex justify-between flex-row-reverse">
          <div ref="mapOption" style="height: 500px; width: 500px"></div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
import { getCurrentInstance } from "vue";
import analyticsData from "../../js/analytics/analyticsData";
import graph from "../../json/echarts/les-miserables.json";
import "../../js/xianggang.js";

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
      mapOptions: {
        title: {
          text: "博文地区分布",
          x: "center",
          textStyle: {
            color: "white",
          },
        },
        tooltip: {
          trigger: "item",
          formatter: "{b}</br>{c} (条)",
        },
        dataRange: {
          min: 100,
          max: 12000,
          // x: 'left',
          // y: 'bottom',
          text: ["High", "Low"],
          // realtime: false,
          calculable: true,
          inRange: {
            color: ["lightskyblue", "yellow", "orange"],
          },
          textStyle: {
            color: "white",
          },
        },
        toolbox: {
          show: true,
          orient: "vertical",
          x: "right",
          y: "center",
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: true },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        roamController: {
          show: true,
          x: "right",
        },
        series: [
          {
            name: "博文数量",
            type: "map",
            mapType: "香港",
            roam: false,
            itemStyle: {
              normal: { label: { show: true } },
              emphasis: { label: { show: true } },
            },
            lebel: {
              // show: true,
              normal: {
                textStyle: {
                  fontsize: 15,
                  fontWeight: "bold",
                  color: "red",
                },
              },
            },
            data: [
              {
                name: "中西區",
                value: 3321,
                textStyle: {
                  color: "white",
                },
              },
              { name: "灣仔區", value: 9413 },
              { name: "東區", value: 4396 },
              { name: "南區", value: 8200 },
              { name: "油尖旺區", value: 5785 },
              { name: "深水埗區", value: 6639 },
              { name: "九龍城區", value: 5257 },
              { name: "黃大仙區", value: 8421 },
              { name: "觀塘區", value: 9077 },
              { name: "荃灣區", value: 112 },
              {
                name: "屯門區",
                value: 2303,
                label: {
                  normal: {
                    show: true,
                    formatter: function (params) {
                      return params.name + "\n" + params.value + "条";
                    },
                  },
                  textStyle: {
                    fontWeight: "normal",
                    fontsize: 200,
                  },
                },
              },
              {
                name: "元朗區",
                value: 13215,
                label: {
                  normal: {
                    show: true,
                    formatter: function (params) {
                      return params.name + "\n" + params.value + "条";
                    },
                  },
                  textStyle: {
                    fontWeight: "normal",
                    fontsize: 200,
                  },
                },
              },
              {
                name: "北區",
                value: 242,
                label: {
                  normal: {
                    show: true,
                    formatter: function (params) {
                      return params.name + "\n" + params.value + "条";
                    },
                  },
                  textStyle: {
                    fontWeight: "normal",
                    fontsize: 200,
                  },
                },
              },
              {
                name: "大埔區",
                value: 3492,
                label: {
                  normal: {
                    show: true,
                    formatter: function (params) {
                      return params.name + "\n" + params.value + "条";
                    },
                  },
                  textStyle: {
                    fontWeight: "normal",
                    fontsize: 200,
                  },
                },
              },
              { name: "西貢區", value: 94 },
              { name: "沙田區", value: 5557 },
              { name: "葵青區", value: 121 },
              {
                name: "離島區",
                value: 943,
                label: {
                  normal: {
                    show: true,
                    formatter: function (params) {
                      return params.name + "\n" + params.value + "条";
                    },
                  },
                  textStyle: {
                    fontWeight: "normal",
                    fontsize: 200,
                  },
                },
              },
            ],
          },
        ],
      },
    };
  },
  components: {
    VueApexCharts,
  },
  // setup(){

  // },
  mounted() {
    const { proxy } = getCurrentInstance();
    this.mapEchartsInit();

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
  },
  methods: {
    mapEchartsInit() {
      this.$echarts.init(this.$refs.mapOption).setOption(this.mapOptions);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contain {
  /* margin-left: 20px; */
  width: 120%;
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
