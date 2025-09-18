<template>
  <div class="header">
    <div class="header-nav">
      <router-link to="/" class="nav-link">首页</router-link>
      <router-link to="/projects" class="nav-link">我的项目</router-link>
      <router-link to="/about" class="nav-link">关于我</router-link> <!-- 新增：关于我链接 -->
    </div>
  </div>
</template>

<style scoped>
.header {
  width: 100%;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}
.header-nav {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  gap: 30px;
}
.nav-link {
  display: inline-block;
  padding: 20px 0;
  color: #333;
  text-decoration: none;
  font-size: 16px;
  position: relative;
}
.nav-link:hover {
  color: #42b983;
}
/* 活跃链接下划线 */
.nav-link.router-link-active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #42b983;
}
</style>