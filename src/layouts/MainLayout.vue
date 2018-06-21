<template>
  <div>
    <MainHeader :root="currentRouter.root" />
    <div class="layout">
      <MainSider :currentRouter="currentRouter" />
      <Layout>
        <Header class="contentHeader">
          <Breadcrumb class="bread">
            <BreadcrumbItem v-for="item in breadList" :key="item.name">{{item.title}}</BreadcrumbItem>
          </Breadcrumb>
        </Header>
        <Content class="content">
          <router-view></router-view>
        </Content>
      </Layout>
    </div>
  </div>
</template>

<style scoped>
.layout {
  height: 100vh;
  padding-top: 70px;
  width: 100%;
  position: relative;
  z-index: 9;
  display: flex;
  align-items: stretch;
}
.sider {
  background: #fff !important;
  overflow-x: hidden;
  border-right: 1px solid #d7dde4;
}
.contentHeader {
  background-color: #fff;
  box-shadow: 0 2px 3px 2px rgba(0, 0, 0, 0.1);
  height: 46px;
  padding: 0 10px;
}
.bread {
  height: 100%;
  line-height: 46px;
}
.content {
  padding: 10px;
}
</style>


<script>
import { Layout, BreadcrumbItem, Breadcrumb, Card, Header } from "iview";
import MainHeader from "../components/MainHeader.vue";
import MainSider from "../components/MainSider.vue";
import headerMenuList from "../config/headerMenu.js";
import siderMenuList from "../config/siderMenu.js";

function getBreadList(path) {
  const pathArr = path.slice(1).split("/");
  const breadList = [];
  if (pathArr.length) {
    const rootItem = headerMenuList.find(item => item.name === pathArr[0]);
    breadList.push(rootItem);
    if (pathArr[1]) {
      const parentItem = siderMenuList[pathArr[0]].find(
        item => item.name === pathArr[1]
      );
      const childItem = parentItem.children.find(
        item => item.name === pathArr[2]
      );
      breadList.push(parentItem, childItem);
    }
  }
  return breadList;
}
export default {
  name: "MainLayout",
  components: {
    MainHeader,
    MainSider,
    Header,
    Layout,
    BreadcrumbItem,
    Breadcrumb,
    Card
  },
  computed: {
    currentRouter: function() {
      const path = this.$route.path.slice(1);
      const pathArr = path.split("/");
      const currentRouter = {
        root: pathArr[0],
        parent: pathArr[1],
        child: pathArr[2]
      };
      return currentRouter;
    },
    breadList: function() {
      return getBreadList(this.$route.path);
    }
  }
};
</script>