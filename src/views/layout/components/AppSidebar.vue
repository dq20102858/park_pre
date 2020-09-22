<template>
  <el-scrollbar wrapClass="scrollbar-wrapper">
    <el-menu
      class="app-menu"
      mode="vertical"
      :show-timeout="200"
      :default-active="activeIndex"
      :collapse="isCollapse"
      router
    >
      <li class="slogo">
        <img :src="require('@/assets/image/logo2.png')" />
      </li>
      <template v-for="item in moduleMenu">
        <el-menu-item
          @click.native="activeSel($event,item.moduleAction)"
          v-if="item.isChildren==0"
          :key="item.id"
          :index="item.moduleAction" :title="item.moduleName"
        >
          <img class="img" :src="require('@/assets/image/m_'+item.moduleIcon+'.png')" />
          <img class="imgon" :src="require('@/assets/image/m_'+item.moduleIcon+'_on.png')" />
          <em  class="span">{{item.moduleName}}</em>
        </el-menu-item>
        <el-submenu v-if="item.isChildren==1" :key="item.id" :index="item.moduleAction">
          <template slot="title">
            <img class="img" :src="require('@/assets/image/m_'+item.moduleIcon+'.png')" />
            <img class="imgon" :src="require('@/assets/image/m_'+item.moduleIcon+'_on.png')" />
            <em class="span">{{item.moduleName}}</em>
          </template>
          <el-menu-item-group>
            <el-menu-item
              v-for="items in item.children"
              :key="items.id"
              :index="items.modulePath"
              :route="items.modulePath"
            >{{items.moduleName}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </template>
    </el-menu>
  </el-scrollbar>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["permission_routers", "sidebar"])
  },
  data() {
    return {
      activeIndex: "defaultMain",
      isCollapse: true,
      isCollapseOpen: sessionStorage.getItem("activeMenu"),
      isAct: 0,
      moduleMenu: [
        {
          id: 1,
          moduleAction: "defaultMain",
          moduleIcon: "monitor",
          moduleName: "项目概況",
          isChildren: 0,
          children: []
        },
        {
          id: 2,
          moduleAction: "",
          moduleIcon: "monitor",
          moduleName: "综合安防",
          isChildren: 0,
          children: []
        },
        {
          id: 3,
          moduleAction: "",
          moduleIcon: "monitor",
          moduleName: "车辆管理",
          isChildren: 0,
          children: []
        },
        {
          id: 4,
          moduleAction: "building",
          moduleIcon: "monitor",
          moduleName: "楼宇自控",
          isChildren: 1,
          children: [
            {
              id: 22,
              moduleAction: "building",
              moduleIcon: "monitor",
              moduleName: "智能照明 ",
              modulePath: "buildlist"
            },
            {
              id: 33,
              moduleAction: "building",
              moduleIcon: "monitor",
              moduleName: "空调集控",
              modulePath: "buildlist"
            },
            {
              id: 34,
              moduleAction: "building",
              moduleIcon: "monitor",
              moduleName: "用电管理",
              modulePath: "buildlist"
            },
            {
              id: 35,
              moduleAction: "building",
              moduleIcon: "monitor",
              moduleName: "电动窗帘",
              modulePath: "buildlist"
            },
            {
              id: 43,
              moduleAction: "building",
              moduleIcon: "monitor",
              moduleName: "电梯管理",
              modulePath: "buildlist"
            }
          ]
        },
        {
          id: 5,
          moduleAction: "",
          moduleIcon: "monitor",
          moduleName: "会务管理",
          isChildren: 0,
          children: []
        },
        {
          id: 6,
          moduleAction: "",
          moduleIcon: "monitor",
          moduleName: "设备管理",
          isChildren: 0,
          children: []
        },
        {
          id: 7,
          moduleAction: "",
          moduleIcon: "monitor",
          moduleName: "消防管理",
          isChildren: 0,
          children: []
        },
        {
          id: 8,
          moduleAction: "",
          moduleIcon: "monitor",
          moduleName: "人员管理",
          isChildren: 0,
          children: []
        },
        {
          id: 9,
          moduleAction: "message",
          moduleIcon: "monitor",
          moduleName: "系统配置",
          isChildren: 0,
          children: []
        }
      ]
    };
  },
  mounted() {
    this.isAct = sessionStorage.getItem("activeMenu");
    let start = window.location.href.lastIndexOf("/");
    let path = window.location.href.slice(start + 1);
    console.log(path + "_" + this.activeIndex + "_" + this.isAct);
    this.activeIndex = path;
  },
  methods: {
    activeSel(event, url) {
      if (url == "") {
        this.activeIndex = "defaultMain";
      } else {
        this.activeIndex = url;
      }

      //   this.isActive = !this.isActive;
    }
  }
};
</script>
<style>
</style>