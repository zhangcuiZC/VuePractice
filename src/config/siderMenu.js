export default {
  content: [
    {
      name: "data",
      title: "数据概览",
      icon: "ios-navigate",
      children: [
        {
          name: "glance",
          title: "应用概览",
          to: "/content/data/glance"
        },
        {
          name: "trend",
          title: "用户趋势",
          to: "/content/data/trend"
        }
      ]
    },
    {
      name: "explore",
      title: "用户探索",
      icon: "ios-keypad",
      children: [
        {
          name: "draw",
          title: "用户画像",
          to: "/content/explore/draw"
        },
        {
          name: "group",
          title: "用户分群",
          to: "/content/explore/group"
        }
      ]
    }
  ]
};
