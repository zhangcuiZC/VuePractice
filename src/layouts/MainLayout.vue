<template>
  <div>
    <MainHeader />
    <div class="layout">
      <Sider class="sider">
        <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']" class="siderMenu">
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>
              数据概览
            </template>
            <MenuItem name="1-1">应用概览</MenuItem>
            <MenuItem name="1-2">用户趋势</MenuItem>
            <MenuItem name="1-3">渠道分析</MenuItem>
            <MenuItem name="1-4">留存分析</MenuItem>
            <MenuItem name="1-5">场景分析</MenuItem>
            <MenuItem name="1-6">扫码分析</MenuItem>
            <MenuItem name="1-7">分享及传播</MenuItem>
            <MenuItem name="1-8">用户质量评估</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-keypad"></Icon>
              用户探索
            </template>
            <MenuItem name="2-1">用户画像</MenuItem>
            <MenuItem name="2-2">用户分群</MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-analytics"></Icon>
              用户行为分析
            </template>
            <MenuItem name="3-1">页面访问</MenuItem>
            <MenuItem name="3-2">事件分析</MenuItem>
            <MenuItem name="3-3">转化漏斗</MenuItem>
            <MenuItem name="3-4">灵动分析</MenuItem>
          </Submenu>
          <Submenu name="4">
            <template slot="title">
              <Icon type="ios-analytics"></Icon>
              电商业务分析
            </template>
            <MenuItem name="4-1">交易分析</MenuItem>
            <MenuItem name="4-2">复购分析</MenuItem>
          </Submenu>
          <Submenu name="5">
            <template slot="title">
              <Icon type="ios-analytics"></Icon>
              数据探索
            </template>
            <MenuItem name="5-1">数据探索</MenuItem>
          </Submenu>
        </Menu>
      </Sider>
      <Layout>
        <Header class="contentHeader">
          <Breadcrumb class="bread">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem>Layout</BreadcrumbItem>
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
.siderMenu {
  font-size: 12px;
}
.siderMenu li {
  font-size: 12px;
  color: #657180;
}
</style>
<style>
.sider .ivu-layout-sider-children {
  width: 202px !important;
}
.sider .ivu-menu-submenu-title {
  font-weight: bold;
  color: #464c5b;
}
.sider .ivu-menu-item-selected {
  font-weight: bold;
}
</style>


<script>
import {
  Layout,
  Sider,
  Menu,
  Submenu,
  Icon,
  MenuItem,
  BreadcrumbItem,
  Breadcrumb,
  Card,
  Header
} from "iview";
import MainHeader from "../components/Header.vue";
export default {
  name: "MainLayout",
  components: {
    MainHeader,
    Header,
    Layout,
    Sider,
    Menu,
    Submenu,
    Icon,
    MenuItem,
    BreadcrumbItem,
    Breadcrumb,
    Card
  }
};
</script>