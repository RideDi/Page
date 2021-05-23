import tr from "element-plus/packages/locale/lang/tr";

export default {
  NowadaysNormalAccount: {
    series: [
      {
        name: "Normal Account",
        // data: [280, 400, 360, 190,502, 380, 600]
        data: [
          {
            x: new Date("03 May 2021").getTime(),
            y: 280,
          },
          {
            x: new Date("05 May 2021").getTime(),
            y: 400,
          },
          {
            x: new Date("06 May 2021").getTime(),
            y: 360,
          },
          {
            x: new Date("07 May 2021").getTime(),
            y: 190,
          },
          {
            x: new Date("08 May 2021").getTime(),
            y: 502,
          },
          {
            x: new Date("09 May 2021").getTime(),
            y: 380,
          },
          {
            x: new Date("10 May 2021").getTime(),
            y: 600,
          },
          {
            x: new Date("11 May 2021").getTime(),
            y: 570,
          },
        ],
      },
    ],
    chartOptions: {
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0,
        },
      },
      chart: {
        // height: 5000,
        background: "#10163B",
        toolbar: {
          show: false,
        },
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 1.5,
      },
      // labels: ['2021-05-1','2021-05-16','2021-05-17','2021-05-18','2021-05-19','2021-05-20',],

      fill: {
        // colors:"#ffc107",
        // type: 'gradient',
        gradient: {
          shadeIntensity: 0.9,
          opacityFrom: 0.7,
          opacityTo: 0.5,
          stops: [0, 80, 100],
        },
      },
      xaxis: {
        type: "datetime",
        min: new Date("03 May 2021").getTime(),
        tickAmount: 6,
        offsetX: 5,
        // labels: {
        //     rotate: 0,
        //     rotateAlways: true,
        //     format: "yyyy-MM-dd",
        // },
        // axisBorder: {
        //     show: true,
        //     color: '#78909C',
        //     height: 1,
        //     width: '100%',
        //     offsetX: 0,
        //     offsetY: 0
        // }
      },
      yaxis: [
        {
          y: 2,
          offsetX: 20,
          offsetY: 100,
          padding: { left: 0, right: 0 },
        },
      ],
      tooltip: {
        shared: true,
        intercept: true,
        x: {
          show: true,
          // format: "yyyy-MM-dd"
        },
        y: {},
      },
      theme: {
        mode: "dark",
        monochrome: {
          enabled: true,
          color: "#fd7e14",

          // shadeTo: 'light',
          // shadeIntensity: 0
        },
      },
    },
  },
  NowadaysFakeAccount: {
    series: [
      {
        name: "Fake Account",
        data: [
          {
            x: new Date("03 May 2021").getTime(),
            y: 400,
          },
          {
            x: new Date("05 May 2021").getTime(),
            y: 260,
          },
          {
            x: new Date("06 May 2021").getTime(),
            y: 390,
          },
          {
            x: new Date("07 May 2021").getTime(),
            y: 500,
          },
          {
            x: new Date("08 May 2021").getTime(),
            y: 460,
          },
          {
            x: new Date("09 May 2021").getTime(),
            y: 130,
          },
          {
            x: new Date("10 May 2021").getTime(),
            y: 300,
          },
          {
            x: new Date("11 May 2021").getTime(),
            y: 570,
          },
        ],
      },
    ],
    chartOptions: {
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0,
        },
      },
      chart: {
        background: "#10163B",
        toolbar: {
          show: false,
        },
        type: "area",
        sparkline: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 1.5,
      },
      fill: {
        color: "#FF4500",
        type: "gradient",
        gradient: {
          shadeIntensity: 0.9,
          opacityFrom: 0.7,
          opacityTo: 0.5,
          stops: [0, 80, 100],
        },
      },

      xaxis: {
        type: "datetime",
        min: new Date("03 May 2021").getTime(),
        tickAmount: 6,
        offsetX: 5,
        // // offsetY:10000,
        // type: 'numeric',
        // lines: {
        //     show: true,
        // },
        // axisBorder: {
        //     show: true,
        // },
        // labels: { show: true }
      },
      yaxis: [
        {
          y: 0,
          offsetX: 110,
          offsetY: 0,
          padding: { left: 0, right: 0 },
        },
      ],
      tooltip: {
        x: { show: false },
      },
      theme: {
        mode: "dark",
        // palette:"#262C49",
        monochrome: {
          enabled: true,
          color: "#6f42c1",
          // shadeTo: 'light',
          // shadeIntensity: 0.65
        },
      },
    },
  },
  TotalAccountAnalytics: {
    analyticsData: [
      { orderType: "Finished", counts: 23043, color: "primary" },
      { orderType: "Pending", counts: 14658, color: "warning" },
      { orderType: "Rejected ", counts: 8385, color: "danger" },
    ],
    series: [100, 64, 36],
    chartOptions: {
      labels: ["Finished", "Normal", "Fake"],
      plotOptions: {
        radialBar: {
          size: 165,
          offsetY: 30,
          hollow: {
            size: "20%",
          },
          track: {
            background: "#ebebeb",
            strokeWidth: "100%",
            margin: 15,
          },
          dataLabels: {
            show: true,
            name: {
              fontSize: "18px",
            },
            value: {
              fontSize: "16px",
              color: "#636a71",
              offsetY: 11,
            },
            total: {
              show: true,
              label: "Total",
              formatter: function () {
                return 42459;
              },
            },
          },
        },
      },
      responsive: [
        {
          breakpoint: 576,
          options: {
            plotOptions: {
              radialBar: {
                size: 150,
                hollow: {
                  size: "20%",
                },
                track: {
                  background: "#ebebeb",
                  strokeWidth: "100%",
                  margin: 15,
                },
              },
            },
          },
        },
      ],
      colors: ["#7961F9", "#FF9F43", "#EA5455"],
      fill: {
        type: "gradient",
        gradient: {
          // enabled: true,
          shade: "dark",
          type: "vertical",
          shadeIntensity: 0.5,
          gradientToColors: ["#9c8cfc", "#FFC085", "#f29292"],
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100],
        },
      },
      stroke: {
        lineCap: "round",
      },
      chart: {
        dropShadow: {
          enabled: true,
          blur: 3,
          left: 1,
          top: 1,
          opacity: 0.1,
        },
      },
    },
  },
  NowadaysPostData: {
    series: [
      {
        name: "Post Count",
        data: [28, 40, 36, 52, 38, 60, 55],
      },
    ],
    chartOptions: {
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0,
        },
      },

      chart: {
        background: "#10163B",
        toolbar: {
          show: false,
        },
        type: "area",
        sparkline: {
          enabled: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 2.5,
      },
      fill: {
        // colors:"#ffc107",
        type: "gradient",
        gradient: {
          shadeIntensity: 0.9,
          opacityFrom: 0.7,
          opacityTo: 0.5,
          stops: [0, 80, 100],
        },
      },
      xaxis: {
        type: "numeric",
        lines: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: { show: false },
      },
      yaxis: [
        {
          y: 0,
          offsetX: 0,
          offsetY: 0,
          padding: { left: 0, right: 0 },
        },
      ],
      tooltip: {
        x: { show: false },
      },
      theme: {
        mode: "dark",
        monochrome: {
          enabled: true,
          color: "#00CED1",

          // shadeTo: 'light',
          // shadeIntensity: 0
        },
      },
    },
  },
  CheckResultBar: {
    chartData: {
      totalTickets: 163,
      openTickets: 103,
      lastResponse: "1d",
    },
    series: [83],
    chartOptions: {
      plotOptions: {
        radialBar: {
          size: 150,
          offsetY: 15,
          startAngle: -150,
          endAngle: 150,
          hollow: {
            size: "65%",
          },
          track: {
            background: "#fff",
            strokeWidth: "100%",
          },
          dataLabels: {
            value: {
              offsetY: 30,
              color: "#FFFFFF",
              fontSize: "2rem",
            },
          },
        },
      },

      colors: ["#EA5455"],
      fill: {
        type: "gradient",
        gradient: {
          // enabled: true,
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: ["#7367F0"],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100],
        },
      },
      xaxis: {
        labels: {
          // colors: ["#FFFFFF"],
          // fontSize: '12px',
        },
      },
      stroke: {
        dashArray: 8,
      },
      chart: {
        sparkline: {},
      },
      labels: ["Robot Probability"],
    },
  },
};
