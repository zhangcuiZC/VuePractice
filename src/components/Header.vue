<template>
    <div class="header">
        <div class="logo">
            <img src="../assets/logo.png">
        </div>
        <div class="menu">
            <Menu mode="horizontal" theme="light" active-name="1" class="headerMenu">
                <MenuItem name="1">
                    <Icon type="ios-paper"></Icon>
                    内容管理
                </MenuItem>
                <MenuItem name="2">
                    <Icon type="ios-people"></Icon>
                    用户管理
                </MenuItem>
                <MenuItem name="4">
                    <Icon type="settings"></Icon>
                    综合设置
                </MenuItem>
            </Menu>
        </div>
        <div class="icon">
            <span>欢迎，超级管理员</span>
            <Dropdown>
                <Icon type="gear-b"></Icon>
                <DropdownMenu slot="list">
                    <DropdownItem><Icon type="edit"></Icon> 修改密码</DropdownItem>
                    <DropdownItem><Icon type="log-out"></Icon> 退出登录</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            
        </div>
    </div>
</template>

<style scoped>
    .header {
        width: 100%;
        height: 70px;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
        background-color: #2b83f9;
        background-image: linear-gradient(143deg,#2945cb 20%,#2b83f9 81%,#3a9dff);
    }
    .logo {
        width: 200px;
        height: 100%;
        float: left;
        position: relative;
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
    .icon span{
        font-size: 14px;
        margin-right: 10px;
    }
</style>
<style>
    .headerMenu{
        background: transparent;
        height: 71px;
        line-height: 70px;
        
    }
    .headerMenu li{
        color: rgba(255,255,255,.7) !important;
        border-bottom-width: 5px !important;
        
    }
    .headerMenu .ivu-menu-item-selected{
        color: #fff !important;
        border-color: #4fe3c1 !important;
    }
</style>

<script>
    import { Menu, Icon, MenuItem, Dropdown, DropdownMenu, DropdownItem } from 'iview';
    export default {
        name: 'Header',
        components: { Menu, Icon, MenuItem, Dropdown, DropdownMenu, DropdownItem }
    }

</script>