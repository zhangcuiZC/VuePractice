import Glance from "@/pages/Content/Data/Glance";
import Trend from "@/pages/Content/Data/Trend";
const MainView = { template: "<router-view></router-view>", name: "MainView" };

export default [
  { path: "", redirect: "data" },
  {
    path: "data",
    component: MainView,
    children: [
      { path: "", redirect: "glance" },
      { path: "glance", name: "Glance", component: Glance },
      {
        path: "trend",
        name: "Trend",
        component: Trend
      }
    ]
  }
];
