
<template>
  <div class="home-container">
    <!-- 1. 头部Banner区 -->
    <div class="home-banner">
      <h1 class="banner-title">Hi，我是张晓琳</h1>
      <p class="banner-desc">一名全栈开发工程师</p >
    </div>

    <!-- 2. 个人信息与技能区 -->
    <div class="home-info">
      <!-- 头像 -->
      <div class="info-avatar">
        <img 
          src="@/assets/avatar.jpg"
          alt="个人头像" 
          class="avatar-img"
        >
      </div>

      <!-- 个人简介 -->
      <div class="info-desc">
        <h2 class="desc-title">关于我</h2>
        <p class="desc-content">
          热爱技术的学习者，擅长Vue，Java开发，喜欢用代码实现创意。
        </p >
        <!-- 联系方式 -->
        <div class="desc-contacts">
          <a href="mailto:936695198@qq.com" class="contact-link">邮箱:936695198@qq.com</a>
          <a class="contact-link">手机号码:17343934050</a>
        </div>
      </div>

      <!-- 技能标签 -->
      <div class="info-skills">
        <h2 class="skills-title">我的技能</h2>
        <div class="skills-tags">
          <!-- 替换为你的技能，可新增/删除标签 -->
          <span class="skill-tag">Vue 2/3</span>
          <span class="skill-tag">JavaScript/TypeScript</span>
          <span class="skill-tag">HTML/CSS</span>
          <span class="skill-tag">struts2</span>
          <span class="skill-tag">easyui</span>
          <span class="skill-tag">spring</span>
          <span class="skill-tag">springmvc</span>
          <span class="skill-tag">springBoot</span>
          <span class="skill-tag">springCloud</span>
          <span class="skill-tag">shell脚本</span>
          <span class="skill-tag">了解高并发的一些处理方式</span>
        </div>
      </div>
    </div>

    <!-- 3. 项目入口区（跳转至项目列表页） -->
    <div class="home-projects">
      <h2 class="projects-title">我的项目</h2>
      <router-link to="/projects" class="projects-btn">查看全部项目</router-link>
      <!-- 可额外添加1-2个重点项目卡片，此处简化为入口按钮 -->
    </div>
  </div>
</template>

<script>
// Vue2写法（若用Vue3，需改为<script setup>语法）
export default {
  name: 'Home',
  // 可在此添加数据或方法，如项目列表数据
  data() {
    return {
      // 示例：若需展示项目卡片，可在这里定义项目数据
      projectList: [
        { id: 1, name: '项目1', desc: '项目简介', link: '/projects/1' },
        { id: 2, name: '项目2', desc: '项目简介', link: '/projects/2' }
      ]
    }
  }
}
</script>

<style scoped>
/* 基础样式，可根据喜好修改颜色、间距 */
.home-container {
  width: 100%;
  max-width: 1200px;  /* 限制最大宽度，避免大屏显示过宽 */
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
}

/* Banner区样式 */
.home-banner {
  text-align: center;
  padding: 60px 0;
  background-color: #f5f7fa;  /* 浅背景色，可替换 */
  border-radius: 8px;
  margin-bottom: 40px;
}
.banner-title {
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
}
.banner-desc {
  font-size: 18px;
  color: #666;
}

/* 个人信息区样式 */
.home-info {
  display: flex;
  flex-wrap: wrap;  /* 自适应，小屏时换行 */
  gap: 40px;
  margin-bottom: 40px;
}
.info-avatar {
  flex: 0 0 180px;  /* 头像固定宽度 */
}
.avatar-img {
  width: 100%;
  border-radius: 50%;  /* 圆形头像 */
  border: 4px solid #f5f7fa;
}
.info-desc, .info-skills {
  flex: 1;  /* 占剩余宽度 */
  min-width: 300px;  /* 小屏时最小宽度 */
}
.desc-title, .skills-title {
  font-size: 22px;
  color: #333;
  margin-bottom: 15px;
  border-left: 4px solid #42b983;  /* Vue绿左侧边框，可替换颜色 */
  padding-left: 10px;
}
.desc-content {
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
}
.contact-link {
  display: inline-block;
  margin-right: 20px;
  color: #42b983;
  text-decoration: none;
  font-size: 16px;
}
.contact-link:hover {
  text-decoration: underline;
}
.skills-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.skill-tag {
  padding: 6px 12px;
  background-color: #f5f7fa;
  color: #666;
  border-radius: 20px;
  font-size: 14px;
}

/* 项目区样式 */
.home-projects {
  text-align: center;
  padding: 30px 0;
  background-color: #f5f7fa;
  border-radius: 8px;
}
.projects-title {
  font-size: 22px;
  color: #333;
  margin-bottom: 20px;
}
.projects-btn {
  display: inline-block;
  padding: 10px 24px;
  background-color: #42b983;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  font-size: 16px;
}
.projects-btn:hover {
  background-color: #359469;  /*  hover时加深颜色 */
}
</style>






