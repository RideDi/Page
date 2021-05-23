  <template>
  <div class="min-h-screen bg-gray-100 text-gray-900 flex justify-center dlbox">
    <div
      class="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1"
    >
      <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
        <div class="mt-12 flex flex-col items-center">
          <h1 class="text-2xl xl:text-3xl font-extrabold">用户登录</h1>
          <div class="w-full flex-1 mt-8">
            <div class="mx-auto max-w-xs">
              <!-- <button class="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                                <div class="weixin"></div>
                                <span class="ml-4">使用微信登录</span>
                            </button>
                            <button class="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5" @click="login_with_pass">
                                
                                <span class="ml-4">使用账号密码登录</span>
                            </button> -->
              <!-- <div class="mx-auto max-w-xs">
                <input
                  class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  placeholder="账号"
                />
                <input
                  class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password"
                  placeholder="密码"
                />
                <button
                  class="mt-5 tracking-wide font-semibold bg-green-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  @click="login_with_pass"
                >
                  <span class="ml-3">登 录</span>
                </button>
              </div> -->
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
                    placeholder="密码"
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button
                    type="primary"
                    class="mt-5 tracking-wide font-semibold bg-green-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                    @click="login_with_pass"
                    :loading="loading"
                    style="width: 100%"
                  >
                    {{ loading ? "登录中..." : "登录" }}
                  </el-button>
                </el-form-item>
              </el-form>
            </div>

            <div class="my-12 border-b text-center">
              <div
                class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"
              >
                或者使用手机号码注册
              </div>
            </div>
            <div class="mx-auto max-w-xs">
              <el-form
                ref="form"
                :model="form"
                :rules="rules"
                label-position="top"
                class="demo-dynamic"
              >
                <el-form-item label="" prop="username">
                  <el-input
                    size="large"
                    type="text"
                    v-model="form.phone"
                    placeholder="手机号码"
                  ></el-input>
                </el-form-item>
                <el-form-item label="" prop="password">
                  <el-input
                    type="password"
                    v-model="form.new_password"
                    placeholder="密码"
                  ></el-input>
                </el-form-item>
                <el-form-item label="" prop="password">
                  <el-input
                    type="text"
                    v-model="form.vercode"
                    placeholder="验证码"
                    class="w-48 pr-4"
                  ></el-input
                  ><el-button @click.prevent="removeDomain(domain)"
                    >验证码</el-button
                  >
                </el-form-item>
                <el-form-item>
                  <el-button
                    type="primary"
                    class="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                    @click="sign_with_email"
                    :loading="loading"
                    style="width: 100%"
                  >
                    {{ loading ? "注册中..." : "注册" }}
                  </el-button>
                </el-form-item>
                <p class="mt-6 text-xs text-gray-600 text-center">
                  我同意并遵守服务协议
                </p>
              </el-form>
            </div>
            <!-- <div class="mx-auto max-w-xs">
              <input
                class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                type="email"
                placeholder="电子邮箱"
              />
              <input
                class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                type="password"
                placeholder="密码"
              />
              <button
                class="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                @click="sign_with_email"
              >
                <span class="ml-3">注 册</span>
              </button>
              <p class="mt-6 text-xs text-gray-600 text-center">
                我同意并遵守服务协议
              </p>
            </div> -->
          </div>
        </div>
      </div>
      <div class="flex-1 bg-indigo-100 text-center hidden lg:flex">
        <div
          class="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat login_bg"
          style=""
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
      currentPagePath: "/login",
      form: {
        username: "",
        password: "",
      },
    };
  },
  inject: ["root"],
  setup() {
    const { proxy } = getCurrentInstance();
    function login_with_pass() {
      proxy.axios
        .post(
          "https://sovea.top:8777/user_routers/loginbypass",
          {
            username: proxy.form.username,
            password: proxy.form.password,
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
      login_with_pass,
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
  background-image: url("../assets/images/weixin.png");
}

.login_bg {
  background-image: url("../assets/images/login_bg.svg");
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
</style>
