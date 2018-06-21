<template>
  <Sider class="sider" v-if="siderMenuList">
    <Menu :active-name="currentRouter.child" theme="light" width="auto" :open-names="[currentRouter.parent]" class="siderMenu">
      <Submenu v-for="parent in siderMenuList" :key="parent.name" :name="parent.name" v-if="!parent.role || parent.role.indexOf(crtRole) !== -1">
        <template slot="title">
          <Icon :type="parent.icon"></Icon>
          {{parent.title}}
        </template>
        <MenuItem @click.native="pushPage(child.to)" v-for="child in parent.children" :key="child.name" :name="child.name" v-if="!child.role || child.role.indexOf(crtRole) !== -1">{{child.title}}</MenuItem>
      </Submenu>
    </Menu>
  </Sider>
</template>

<style scoped>
.sider {
  background: #fff !important;
  overflow-x: hidden;
  border-right: 1px solid #d7dde4;
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
import { Sider, Menu, Submenu, Icon, MenuItem } from "iview";
import siderMenu from "../config/siderMenu.js";
import { getCookie } from "../utils/cookie.js";

export default {
  name: "MainSider",
  components: {
    Sider,
    Menu,
    Submenu,
    Icon,
    MenuItem
  },
  props: ["currentRouter"],
  computed: {
    siderMenuList: function() {
      return siderMenu[this.currentRouter.root];
    },
    crtRole: function() {
      return getCookie("role");
    }
  },
  methods: {
    pushPage: function(to) {
      this.$router.push(to);
    }
  }
};
</script>
