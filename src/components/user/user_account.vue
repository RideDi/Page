<template>
  <div class="min-h-screen bg-gray-100 text-gray-900 flex justify-center dlbox" style="background-color: #10163b">
    <div
      class="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1" style="background-color: #546293"
    >
      <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
        <div class="mt-12 flex flex-col items-center">
          <h1 class="text-2xl xl:text-3xl font-extrabold" style="color: snow">修改密码</h1>
          <div class="w-full flex-1 mt-8">
            <div class="mx-auto max-w-xs">
              <el-form
                ref="form"
                :model="form"
                :rules="rules"
                label-position="top"
              >
                <el-form-item label="" prop="username">
                  <el-input
                    size="large"
                    v-model="form.username"
                    placeholder="用户名"
                  ></el-input>
                </el-form-item>
                <el-form-item label="" prop="password">
                  <el-input
                    type="password"
                    v-model="form.password"
                    placeholder="当前密码"
                  ></el-input>
                </el-form-item>
                <el-form-item label="" prop="password">
                  <el-input
                    type="password"
                    v-model="form.new_password"
                    placeholder="新密码"
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button
                    type="primary"
                    class="mt-5 tracking-wide font-semibold text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                    @click="change_for_newpass"
                    :loading="loading"
                    style="width: 100%"
                  >
                    {{ loading ? "修改中..." : "修改" }}
                  </el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1 bg-indigo-100 text-center hidden lg:flex" style="background-color: #223670">
        <div
          class="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat login_bg"
          style="background-color: #546293"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
import { getCurrentInstance } from "vue";
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
        new_password: "",
      },
    };
  },
  inject: ["root"],
  setup() {
    const { proxy } = getCurrentInstance();
    function change_for_newpass() {
      proxy.axios
        .post(
          "https://sovea.top:8777/auth_user_routers/changemypass",
          {
            username: proxy.form.username,
            password: proxy.form.password,
            new_password: proxy.form.new_password,
          },
          { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
        )
        .then((res) => {
          console.log(res);
          if (res.data.errcode === 0) {
            localStorage.setItem("ins_toolkit_token", res.data.token);
            proxy.$router.replace({ name: "home" });
          }
        });
    }
    return {
      change_for_newpass,
    };
  },
  //   mounted() {},
};
</script>
<style scoped>
body {
  margin: 0, 0, 0, 0;
}
.dlbox {
  height: 100%;
  width: 100%;
}
.dlbox .weixin {
  display: inline-block;
  width: 32px;
  height: 32px;
  background-size: cover;
}

.dlbox .weixin {
  background-image: url("../../assets/images/weixin.png");
}

.login_bg {
  background-image: url("../../assets/images/change_pass.svg");
}
.bg-indigo-100 {
  background-color: #ebf4ff;
}
.border-gray-200 {
  border-color: #edf2f7;
}
.bg-gray-100 {
  background-color: #f7fafc;
}
.bg-indigo-500 {
  background-color: #667eea;
}
.content {
  width: auto;
}
</style>
