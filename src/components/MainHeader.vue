<template>
  <div class="header">
    <div class="logo">
      <!-- <img src="../assets/logo.png"> -->
      <Icon class="logoIcon" type="cube"></Icon>
      <div class="logoBox">
        <p class="logoTitle">数据分析平台</p>
        <p class="logoText">Data Analysis Platform</p>
      </div>

    </div>
    <div class="menu">
      <Menu mode="horizontal" theme="light" :active-name="root" class="headerMenu">
        <MenuItem v-for="item in headerMenuList" :name="item.name" :key="item.name">
        <router-link :to="item.to">
          <Icon :type="item.icon"></Icon>
          {{item.title}}
        </router-link>
        </MenuItem>
      </Menu>
    </div>
    <div class="icon">
      <span>欢迎，超级管理员</span>
      <Dropdown>
        <Icon type="gear-b"></Icon>
        <DropdownMenu slot="list">
          <DropdownItem>
            <Icon type="edit"></Icon> 修改密码</DropdownItem>
          <DropdownItem>
            <Icon type="log-out"></Icon> 退出登录</DropdownItem>
        </DropdownMenu>
      </Dropdown>

    </div>
  </div>
</template>

<style scoped lang="less">
.header {
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: #2b83f9;
  background-image: linear-gradient(143deg, #2945cb 20%, #2b83f9 81%, #3a9dff);
}
.logo {
  width: 200px;
  height: 100%;
  float: left;
  position: relative;
  padding-left: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .logoIcon {
    color: #fff;
    font-size: 40px;
    margin-right: 10px;
  }
  .logoBox {
    font-size: 12px;
    display: inline-block;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .logoTitle {
      font-size: 14px;
    }
    .logoText {
      color: #fff;
      display: inline-block;
      font-weight: lighter;
    }
  }
}
img {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  max-width: 100%;
  max-height: 100%;
}
.menu {
  float: left;
  height: 100%;
  overflow: hidden;
}
.icon {
  height: 100%;
  float: right;
  font-size: 22px;
  color: #fff;
  margin-right: 10px;
  display: flex;
  align-items: center;
}
.icon span {
  font-size: 14px;
  margin-right: 10px;
}
</style>
<style lang="less">
.headerMenu {
  background: transparent;
  height: 71px;
  line-height: 70px;
}
.headerMenu li {
  color: rgba(255, 255, 255, 0.7) !important;
  border-bottom-width: 5px !important;
}
.headerMenu .ivu-menu-item-selected {
  color: #fff !important;
  border-color: #4fe3c1 !important;
}
.headerMenu .ivu-menu-item {
  padding: 0;
  width: 120px;
  text-align: center;
  a {
    width: 100%;
    color: #fff;
    display: inline-block;
    height: 100%;
  }
}
</style>

<script>
import {
  Menu,
  Icon,
  MenuItem,
  Dropdown,
  DropdownMenu,
  DropdownItem
} from "iview";
import headerMenuList from "../config/headerMenu.js";
export default {
  name: "MainHeader",
  components: { Menu, Icon, MenuItem, Dropdown, DropdownMenu, DropdownItem },
  data() {
    return {
      headerMenuList
    };
  },
  props: ["root"]
};
</script>