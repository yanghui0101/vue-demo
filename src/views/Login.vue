<template>
  <div class="login-container">
    <el-form ref="form" :model="form"  class="login-form">
      <h2 class="login-title">登陆</h2>
      <span class="login-text">艾坤德官网</span>
      <el-form-item>
        <el-input v-model="form.username" disabled prefix-icon="el-icon-suitcase"></el-input>
      </el-form-item>
      <el-form-item >
        <el-input v-model="form.password" show-password  placeholder="请输入密码" prefix-icon="el-icon-lock"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
  <script>
export default {
  data() {
    return {
      form: {
        username: "admin",
        password: ""
      }
    };
  },
  methods: {
    onSubmit() {
      if(this.form.password === '000000'){
          localStorage.setItem('user','true');
          document.body.style.overflow = '';
          this.$emit('closeLogin',false)
      }else{
          this.$message.error('密码错误！');
      }
    }
  }
};
</script>

<style acoped>
.login-form {
  width: 350px;
  height: 350px; 
  background-color: #fff; 
  padding: 30px;
  box-sizing: border-box;
  border-radius: 10px; 
}

/* 背景 */
.login-container {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1001;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, .8);
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 标题 */
.login-title {
  font-size: 24px;
  color: #2B2B2B;
  margin: 0;
}
.login-text{
    color: #B9B9B9;
    font-size: 12px;
    padding-bottom: 30px;
    display: block;
}
.el-button--primary{
    width: 100%;
    height: 40px;
    background: #086DE0;
    border-radius: 5px;
    border-color: #086DE0;
    letter-spacing:5px;
}
.el-button--primary:hover{
    width: 100%;
    height: 40px;
    background: #086DE0;
    border-radius: 5px;
    border-color: #086DE0;
}
</style>