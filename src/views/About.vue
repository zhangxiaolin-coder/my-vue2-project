<template>
  <div class="about-container">
    <!-- 页面标题 -->
    <div class="about-header">
      <h1 class="header-title">关于我</h1>
      <div class="header-divider"></div>
    </div>

    <!-- 内容主体：左右分栏（信息 + 经历） -->
    <div class="about-content">
      <!-- 左侧：个人基础信息 -->
      <div class="content-info">
        <div class="info-avatar">
          <img src="@/assets/avatar.jpg" alt="个人头像">
        </div>
        <h2 class="info-name">张晓琳</h2>
        <p class="info-role">Java工程师</p >
        <div class="info-contact">
          <p class="contact-item">📱 电话：17343934050</p >
          <p class="contact-item">✉️ 邮箱：936695198@qq.com</p >
          <p class="contact-item">📍 坐标：西安</p >
        </div>
        <!-- 社交链接 -->
        <div class="info-social">
          GitHub
          知乎
          掘金
        </div>
      </div>

      <!-- 右侧：个人经历 + 自我描述 -->
      <div class="content-detail">
        <!-- 教育/工作经历 -->
        <div class="detail-section">
          <h3 class="section-title">📚 教育经历</h3>
          <div class="section-content">
            <div class="experience-item">
              <p class="exp-time">2010.09 - 2015.06</p >
              <p class="exp-title">华北电力大学 | 软件工程 | 本科</p >
              <p class="exp-desc"></p >
            </div>
          </div>
        </div>

        <div class="detail-section">
          <h3 class="section-title">💼 工作经历</h3>
          <div class="section-content">
            <div class="experience-item">
              <p class="exp-time">2020.11-2024.4</p >
              <p class="exp-title">北京科蓝 | Java工程师</p >
              <p class="exp-desc">作为Java程序员，完成ECIF后端需求的开发。
用到的技术栈有：北京科蓝软件技术有限公司自研的框架，该框架已经使用11年。</p >
            </div>
            <div class="experience-item">
              <p class="exp-time">2020.3-2020.9</p >
              <p class="exp-title">北京宇信鸿泰| Java工程师</p >
              <p class="exp-desc">完成后台数据文件的推送。处理文件推送过程中出现的问题。后台集群的搭建。
    用到的技术栈有：Linux</p >
            </div>
            <div class="experience-item">
              <p class="exp-time">2018.10-2020.3</p >
              <p class="exp-title">深圳软通动力 | Java工程师</p >
              <p class="exp-desc">完成主要的功能设计及实现
主要业务是：华为终端材料的采购、使用、报废物料的处理等。以供各部门领导的同意、驳回、转发。是一个电子流项目。
    用到的技术框架有：spring boot、mybatis、oracle、activity。</p >
            </div>
            <div class="experience-item">
              <p class="exp-time">2017.5-2018.8</p >
              <p class="exp-title">北京创美信 | Java工程师</p >
              <p class="exp-desc">完成软件接口编写,向数据库导入数据以及领导完成的其他任务 
主要业务是：人员管理系统
    用到的技术框架有：spring boot、redis、mybatis。</p >
            </div>
            <div class="experience-item">
              <p class="exp-time">2015.7-2017.4</p >
              <p class="exp-title">中软国际 | Java</p >
              <p class="exp-desc">从事公司软件开发工具链工具的使用调研,任职期间从事软件编码工作，单元测试，负责的模块设计与文档编写，修复程序BUG，参与部分模块的设 计工作，功能模块分析及编码实现等；
完成上级领导交办的其他工作事宜。 
    用到的技术栈：调研工作，所以没有用到技术框架。</p >
            </div>
          </div>
        </div>

        <!-- 自我描述 -->
        <div class="detail-section">
          <h3 class="section-title">✨ 个人描述</h3>
          <div class="section-content">
            <p class="desc-text">热爱软件开发，对用户体验与代码质量有较高追求。擅长用Vue生态实现业务需求，同时持续学习Java等技术。工作/学习中注重逻辑思维与团队协作，喜欢通过技术解决实际问题。</p >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.about-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
}

/* 页面标题 */
.about-header {
  text-align: center;
  margin-bottom: 40px;
}
.header-title {
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
}
.header-divider {
  width: 80px;
  height: 4px;
  background-color: #42b983;
  margin: 0 auto;
  border-radius: 2px;
}

/* 内容主体：分栏布局 */
.about-content {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
}
.content-info {
  flex: 0 0 300px;
  background-color: #f5f7fa;
  border-radius: 8px;
  padding: 30px;
  text-align: center;
}
.content-detail {
  flex: 1;
  min-width: 500px;
}

/* 左侧个人信息 */
.info-avatar img {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  border: 4px solid #fff;
  margin-bottom: 20px;
}
.info-name {
  font-size: 22px;
  color: #333;
  margin-bottom: 8px;
}
.info-role {
  font-size: 16px;
  color: #666;
  margin-bottom: 25px;
}
.info-contact {
  text-align: left;
  margin-bottom: 25px;
}
.contact-item {
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.info-social {
  display: flex;
  justify-content: center;
  gap: 15px;
}
.social-link {
  font-size: 14px;
  color: #42b983;
  text-decoration: none;
  padding: 6px 12px;
  border: 1px solid #42b983;
  border-radius: 4px;
  transition: all 0.3s;
}
.social-link:hover {
  background-color: #42b983;
  color: #fff;
}

/* 右侧详情区 */
.detail-section {
  margin-bottom: 30px;
}
.section-title {
  font-size: 18px;
  color: #333;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.section-content {
  padding-left: 28px;
}
.experience-item {
  margin-bottom: 20px;
}
.exp-time {
  font-size: 14px;
  color: #999;
  margin-bottom: 4px;
}
.exp-title {
  font-size: 16px;
  color: #333;
  font-weight: 500;
  margin-bottom: 4px;
}
.exp-desc {
  font-size: 14px;
  color: #666;
  line-height: 1.5;
}
.desc-text {
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  text-align: justify;
}
</style>