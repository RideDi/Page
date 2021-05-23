/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module '/js/analytics/analyticsData.js'{
  const analyticsData:any;
  export default analyticsData;
};
declare module 'animate.css';
declare module '/plugins/axios'{
  const axios:any;
  export default axios;
}