<template lang="pug">
div.listHeader
  el-menu(mode='horizontal' :router="true" background-color='lightblue' text-color='black')
    el-menu-item(index='1' route="/list" )
      img(:style="logoSize" src="../../assets/image/logo.png")
      span.header {{ header }}
    el-submenu(index='2' v-if="this.$store.state.adminModule.isLogin" )
      template(slot='title' )
        span.menu-item 訂單相關
      el-menu-item( v-for="item in listNav" :index="item.route") {{item.name}}
    el-submenu(index='3'  v-if="this.$store.state.adminModule.isLogin"  :disabled="show")
      template(slot='title')
        span.menu-item 產品相關
      el-menu-item( v-for="item in productNav" :index="item.route") {{item.name}}

    logoutBtn
    p.userName(v-if="showUserName") Welcome! {{ userName }}
    //- el-menu-item(index='3' disabled='') Info 不可點按狀態 官方寫法
</template>
<script>
import logoutBtn from "@/components/childComponents/logoutBtn.vue";
export default {
  components: {
    logoutBtn,
  },
  data() {
    return {
      showUserName: false,
      // activatedFlag: false,
      userName: "",
      header: "Happy Bird",
      logoSize: [
        {
          width: "100px",
        },
      ],
      listNav: [
        { name: "建立訂單", route: "/add" },
        { name: "查看訂單", route: "/list" },
      ],
      productNav: [
        { name: "建立產品", route: "/addProduct" },
        { name: "查看產品", route: "/product" },
      ],
    };
  },
  computed: {
    show() {
      if (JSON.parse(sessionStorage.getItem("userData")).role == "user") {
        return true;
      }
    },
  },
  watch: {
    "$store.state.adminModule.isLogin": {
      handler(val) {
        if (val) {
          this.showUserName = true;
          this.userName = JSON.parse(
            sessionStorage.getItem("userData") //提醒：session/local storage裡的東西不可以掛在created
          ).signupName;
        } else {
          this.showUserName = false;
        }
      },
      immediate: true, //要在最初綁定值的時候也執行watch()，就需要用到immediate屬性
      deep: true,
    },
    // https://vuejs.org/guide/essentials/watchers.html#basic-example 官方文件 vue watcher
    // https://ithelp.ithome.com.tw/articles/10241694 vue watcher
    // https://segmentfault.com/q/1010000020634645 activated deactivated Hooks
  },
};
</script>

<style lang="scss" scoped>
.menu-item {
  font-size: 18px;
}
.listHeader {
  position: relative;
  box-sizing: border-box;
  height: 80px;
  margin-bottom: 20px;
  background: lightblue;

  .header {
    color: #000000;
    font-size: 32px !important;
  }
  .userName {
    position: absolute;
    right: 90px;
    top: 25px;
    font-size: 18px;
    font-weight: bold;
  }
}
</style>
