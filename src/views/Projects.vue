<template>
  <div class="projects-container">
    <!-- 页面标题 -->
    <div class="projects-header">
      <h1 class="header-title">我的项目</h1>
      <p class="header-desc">记录学习与实践过程中的作品，点击卡片查看详情</p >
    </div>

    <!-- 项目分类筛选 -->
    <div class="projects-filter">
      <button 
        class="filter-btn" 
        :class="{ active: currentFilter === 'all' }"
        @click="currentFilter = 'all'"
      >
        全部项目
      </button>
      <button 
        class="filter-btn" 
        :class="{ active: currentFilter === 'frontend' }"
        @click="currentFilter = 'frontend'"
      >
        前端开发
      </button>
      <button 
        class="filter-btn" 
        :class="{ active: currentFilter === 'demo' }"
        @click="currentFilter = 'demo'"
      >
        练习demo
      </button>
    </div>

    <!-- 项目卡片列表 -->
    <div class="projects-list">
      <!-- 用v-for循环渲染筛选后的项目，无项目时显示提示 -->
      <div 
        class="project-card" 
        v-for="project in filteredProjects" 
        :key="project.id"
        @click="goToProjectDetail(project.id)"
      >
        <!-- 项目封面图 -->
        <div class="card-img">
          <img :src="project.coverImg" :alt="project.name">
        </div>
        <!-- 项目信息 -->
        <div class="card-info">
          <h3 class="card-title">{{ project.name }}</h3>
          <span class="card-tag" :style="{ backgroundColor: getTagColor(project.tag) }">
            {{ project.tag }}
          </span>
          <p class="card-desc">{{ project.desc }}</p >
          <!-- 项目技术栈 -->
          <div class="card-tech">
            <span class="tech-item" v-for="tech in project.techStack" :key="tech">
              {{ tech }}
            </span>
          </div>
        </div>
      </div>

      <!-- 无匹配项目时显示 -->
      <div class="empty-tip" v-if="filteredProjects.length === 0">
        暂无该分类下的项目，敬请期待～
      </div>
    </div>
  </div>
</template>

<script>
// Vue2写法（Vue3可改为<script setup>）
import projectsData from '@/data/projects.json'
export default {
  name: 'Projects',
  data() {
    return {
      // 当前筛选分类（all/frontend/demo）
      currentFilter: 'all',
      // 项目数据列表（替换为你的真实项目信息）
      projectList: projectsData
    }
  },
  computed: {
    // 计算属性：根据当前筛选条件过滤项目
    filteredProjects() {
      if (this.currentFilter === 'all') {
        return this.projectList;
      }
      // 按tag匹配筛选（tag值需与筛选按钮的value对应）
      return this.projectList.filter(project => {
        return this.currentFilter === 'frontend' 
          ? project.tag === '前端开发' 
          : project.tag === '练习demo';
      });
    }
  },
  methods: {
    // 跳转到项目详情页（需先在router/index.js配置详情页路由）
    goToProjectDetail(projectId) {
      this.$router.push(`/projects/${projectId}`);
    },
    // 给不同分类的项目标签设置不同颜色
    getTagColor(tag) {
      switch (tag) {
        case '前端开发':
          return '#42b983'; // Vue绿
        case '练习demo':
          return '#3498db'; // 蓝色
        default:
          return '#999';
      }
    }
  }
}
</script>

<style scoped>
/* 页面容器样式 */
.projects-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
}

/* 页面标题区 */
.projects-header {
  text-align: center;
  margin-bottom: 40px;
}
.header-title {
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
}
.header-desc {
  font-size: 16px;
  color: #666;
}

/* 筛选按钮区 */
.projects-filter {
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-bottom: 30px;
}
.filter-btn {
  padding: 8px 18px;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  background: #fff;
  color: #666;
  cursor: pointer;
  transition: all 0.3s;
}
.filter-btn:hover {
  border-color: #42b983;
  color: #42b983;
}
.filter-btn.active {
  background-color: #42b983;
  color: #fff;
  border-color: #42b983;
}

/* 项目列表区 */
.projects-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
}
/* 项目卡片 */
.project-card {
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}
.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}
/* 卡片封面图 */
.card-img img {
  width: 100%;
  height: 200px;
  object-fit: cover; /* 保持图片比例，避免拉伸 */
}
/* 卡片信息区 */
.card-info {
  padding: 20px;
}
.card-title {
  font-size: 18px;
  color: #333;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card-tag {
  font-size: 12px;
  color: #fff;
  padding: 3px 8px;
  border-radius: 4px;
}
.card-desc {
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  margin-bottom: 15px;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 最多显示2行文字，超出省略 */
  -webkit-box-orient: vertical;
  overflow: hidden;
}
/* 技术栈标签 */
.card-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.tech-item {
  font-size: 12px;
  color: #999;
  padding: 2px 8px;
  border: 1px solid #eee;
  border-radius: 4px;
}

/* 无项目提示 */
.empty-tip {
  text-align: center;
  color: #999;
  font-size: 16px;
  padding: 50px 0;
  grid-column: 1 / -1; /* 占满所有列 */
}
</style>