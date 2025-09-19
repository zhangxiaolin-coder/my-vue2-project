<template>
  <div class="detail-container">
    <!-- 回到列表页按钮 -->
    <button class="back-btn" @click="$router.push('/projects')">
      ← 返回项目列表
    </button>

    <!-- 项目详情主体 -->
    <div class="detail-content">
      <!-- 项目标题与封面 -->
      <div class="detail-header">
        <h1 class="detail-title">{{ currentProject.name }}</h1>
        <span class="detail-tag" :style="{ backgroundColor: getTagColor(currentProject.tag) }">
          {{ currentProject.tag }}
        </span>
        <div class="detail-cover">
          <img :src="currentProject.coverImg" :alt="currentProject.name">
        </div>
      </div>

      <!-- 项目核心信息 -->
      <div class="detail-info">
        <div class="info-section">
          <h2 class="section-title">项目介绍</h2>
          <p class="section-content">{{ currentProject.desc }}</p >
        </div>

        <div class="info-section">
          <h2 class="section-title">开发背景</h2>
          <p class="section-content">{{ currentProject.background || '为提升[对应技术]实战能力，独立完成该项目开发' }}</p >
        </div>

        <div class="info-section">
          <h2 class="section-title">实现功能</h2>
          <ul class="feature-list">
            <li class="feature-item" v-for="(feature, idx) in currentProject.features" :key="idx">
              • {{ feature }}
            </li>
          </ul>
        </div>

        <div class="info-section">
          <h2 class="section-title">技术栈</h2>
          <div class="tech-list">
            <span class="tech-item" v-for="tech in currentProject.techStack" :key="tech">
              {{ tech }}
            </span>
          </div>
        </div>

        <!-- 项目链接（演示/源码） -->
        <div class="info-links">
          <a 
            :href="currentProject.demoLink" 
            target="_blank" 
            class="link-btn demo-btn"
            v-if="currentProject.demoLink"
          >
            在线演示
          </a >
          <a 
            :href="currentProject.codeLink" 
            target="_blank" 
            class="link-btn code-btn"
            v-if="currentProject.codeLink"
          >
            查看源码
          </a >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Vue2写法（Vue3可改为<script setup>）
import allProjects from '@/data/projects.json'
export default {
  name: 'ProjectDetail',
  data() {
    return {
      // 所有项目数据（建议后续可抽成单独的json文件管理）
      allProjects:allProjects,
      currentProject: {} // 当前展示的项目
    }
  },
  mounted() {
    // 页面加载时，通过路由参数id匹配当前项目
    const projectId = this.$route.params.id;
    this.currentProject = this.allProjects.find(project => project.id === Number(projectId)) || {};
  },
  methods: {
    // 项目标签颜色匹配
    getTagColor(tag) {
      switch (tag) {
        case '前端开发':
          return '#42b983';
        case '练习demo':
          return '#3498db';
        default:
          return '#999';
      }
    }
  }
}
</script>

<style scoped>
.detail-container {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
}

/* 回到列表页按钮 */
.back-btn {
  padding: 8px 16px;
  border: 1px solid #42b983;
  border-radius: 4px;
  background: #fff;
  color: #42b983;
  cursor: pointer;
  transition: all 0.3s;
  margin-bottom: 20px;
}
.back-btn:hover {
  background-color: #42b983;
  color: #fff;
}

/* 详情主体 */
.detail-content {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 30px;
}

/* 详情头部（标题+封面） */
.detail-header {
  margin-bottom: 30px;
}
.detail-title {
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 15px;
}
.detail-tag {
  font-size: 14px;
  color: #fff;
  padding: 4px 10px;
  border-radius: 4px;
}
.detail-cover img {
  width: 100%;
  height: auto;
  border-radius: 4px;
  margin-top: 15px;
}

/* 详情信息区 */
.info-section {
  margin-bottom: 25px;
}
.section-title {
  font-size: 18px;
  color: #333;
  margin-bottom: 12px;
  border-left: 4px solid #42b983;
  padding-left: 10px;
}
.section-content {
  font-size: 16px;
  color: #666;
  line-height: 1.6;
}

/* 功能列表 */
.feature-list {
  font-size: 16px;
  color: #666;
  line-height: 2;
  padding-left: 20px;
}

/* 技术栈列表 */
.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 8px;
}
.tech-item {
  font-size: 14px;
  color: #666;
  padding: 6px 12px;
  border: 1px solid #eee;
  border-radius: 4px;
}

/* 项目链接按钮 */
.info-links {
  margin-top: 30px;
  display: flex;
  gap: 15px;
}
.link-btn {
  display: inline-block;
  padding: 10px 20px;
  border-radius: 4px;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.3s;
}
.demo-btn {
  background-color: #42b983;
  color: #fff;
}
.demo-btn:hover {
  background-color: #359469;
}
.code-btn {
  background-color: #333;
  color: #fff;
}
.code-btn:hover {
  background-color: #555;
}
</style>