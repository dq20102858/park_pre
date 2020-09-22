<template>
  <div class="navbar" mode="horizontal">
    <div class="hamburger-container" :isActive="sidebar.opened" @click="toggleSideBar">
      <img :src="require('@/assets/image/icon-cole.png')" />
    </div>
    <div class="breadcrumb">
      <h1>智慧园区管理系统</h1>
    </div>
    <div class="right-menu">
      <span v-if="sys_role==1">
        <router-link v-show="isShow" class="applylink" to="weekplanapply">
          <i class="el-icon-message"></i>
        </router-link>
      </span>

      <el-dropdown class="avatar-container right-menu-item" trigger="click">
        <div class="avatar-wrapper">
          <img class="user-avatar" :src="require('@/assets/image/users.png')" />
          <span>{{name}}</span>
          <i class="el-icon-caret-bottom"></i>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <span @click="logout" style="display:block;">退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Navbar",
  data() {
    return {
      levelList: null,
      isShow: false
    };
  },
  computed: {
    ...mapGetters(["sidebar", "name", "avatar", "roles", "sys_role", "system"])
  },

  methods: {
    toggleSideBar() {
      this.$store.dispatch("toggleSideBar");
    },
    logout() {
      this.$store.dispatch("LogOut").then(() => {
        location.reload(); // In order to re-instantiate the vue-router object to avoid bugs
      });
    }
    // handleCommand(system) {
    //   this.$store.dispatch("ChangeSystem", system).then(() => {
    //     location.href = "/";
    //   });
    // }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss">
.breadcrumb {
  margin: 0 auto;
  padding-top: 10px;
}
.breadcrumb h1 {
  text-align: center;
  background: #f2f4f9;
  border-radius: 30px;
  width: 280px;
  margin: 0 auto;
  font-size: 22px;
  color: #1361b4;
  height: 40px;
  line-height: 40px;
}
.navbar {
  position: relative;
  height: 60px;
  line-height: 60px;
  border-radius: 0px !important;
  background: #fff;
}
.hamburger-container {
  line-height: 58px;
  height: 60px;
  float: left;
  padding:  10px; cursor: pointer;
}
.right-menu {
  position: absolute;
  top: 1px;
  right: 20px;
  height: 100%;
  &:focus {
    outline: none;
  }
  .right-menu-item {
    display: inline-block;
    margin: 0 8px;
  }
  .avatar-container {
    margin-right: 30px;
    float: right;
    margin-top: -2px;
    .avatar-wrapper {
      cursor: pointer;
      position: relative;
      .user-avatar {
        width: 38px;
        height: 38px;
        border-radius: 10px;
        display: inline-block;
        vertical-align: middle;
      }
      span {
        display: inline-block;
        max-width: 120px;
        font-size: 14px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        vertical-align: middle;
      }
      .el-icon-caret-bottom {
        position: absolute;
        right: -15px;
        top:21px;
        font-size: 14px;
      }
    }
  }
  .select-system {
    margin-right: 20px;
    .el-button {
      width: 200px;
      text-align: left;
    }
    .el-icon--right {
      float: right;
    }
  }
  .el-button--primary {
    background-color: rgba(64, 158, 255, 0.05);
    color: #333;
  }
  .el-button-group .el-button--primary:first-child {
    border-right-color: #409eff;
    width: 180px;
    text-align: left;
  }
  .el-button-group .el-button:not(:last-child) {
    margin: auto;
  }
}
</style>
