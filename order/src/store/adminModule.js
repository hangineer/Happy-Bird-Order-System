import axios from "axios";
export default {
  namespaced: true,
  state: {
    isLogin: false,
    userData: [],
  },
  mutations: {
    setIsLogin(state, isLogin) {
      state.isLogin = isLogin;
    },
    setGetUserData(state, userData) {
      state.userData = userData;
    },
    signupUserData(state, userInfo) {
      state.userData.push(userInfo);
    },
  },
  actions: {
    //新增使用者（註冊）
    signupUserData(context, userInfo) {
      axios
        .post("http://localhost:3000/users", userInfo)
        .then(function (response) {
          context.commit("signupUserData", userInfo);
        })
        .catch(function (error) {
          console.log(error);
          throw error;
        });
    },
    //取得使用者資訊(登入)
    getUserData(context) {
      axios
        .get("http://localhost:3000/users")
        .then(function (response) {
          context.commit("setGetUserData", response.data);
        })
        .catch(function (error) {
          console.log(error);
          throw error;
        });
    },
  },
  getters: {},
};
