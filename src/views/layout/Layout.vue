<template>
    <div class="app-wrapper" :class="classObj">
        <app-sidebar class="app-sidebar-container"></app-sidebar>
        <div class="app-main-container">
            <app-navbar :msg="msg"></app-navbar>
            <app-main></app-main>
        </div>
    </div>
</template>
<script>
    import { AppNavbar, AppSidebar, AppMain } from "./components";
    // import ResizeMixin from "./mixin/ResizeHandler";
    export default {
      data() {
        return {
          msg: 0,
        }
      },
      components: {
        AppNavbar,
        AppSidebar,
        AppMain
      },
      // mixins: [ResizeMixin],
      computed: {
        sidebar() {
          return this.$store.state.app.sidebar;
        },
        device() {
          return this.$store.state.app.device;
        },
        classObj() {
          return {
            hideSidebar: !this.sidebar.opened,
            withoutAnimation: this.sidebar.withoutAnimation,
            mobile: this.device === "mobile"
          };
        }
      },
      methods: {
        handleClickOutside() {
          this.$store.dispatch("closeSideBar", { withoutAnimation: false });
        }
      }
    };
</script>