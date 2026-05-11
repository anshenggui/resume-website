<template>
  <div class="resume-container" ref="containerRef" :class="themeClass">
    <!-- 光粒子画布（全屏背景） -->
    <canvas class="particle-canvas" ref="particleCanvas"></canvas>

    <!-- 主题切换按钮（阿里图标 太阳/月亮） -->
    <div class="theme-switch">
      <a-button type="primary" shape="circle" size="large" @click="toggleTheme">
        <span class="iconfont icon-yueliang" v-if="!isDark"></span>
        <span class="iconfont icon-taiyang" v-else></span>
      </a-button>
    </div>

    <!-- 顶部头部 -->
    <div class="resume-header">
      <div class="header-glow"></div>
      <div class="header-content">
        <h1 class="name">{{ basic.name }}</h1>
        <p class="job">{{ basic.intent.join(' / ') }}</p>
        <div class="contact-bar">
          <a-space size="large">
            <a-tag color="blue">{{ basic.phone }}</a-tag>
            <a-tag color="cyan">{{ basic.email }}</a-tag>
            <a-tag color="purple">
              {{ basic.age }}岁 | {{ basic.education }}
            </a-tag>
          </a-space>
        </div>
        <div class="link-group">
          <a-button
            class="github-btn"
            type="primary"
            ghost
            @click="openLink(basic.github)"
          >
            GitHub
          </a-button>
          <a-button
            class="gitee-btn"
            type="default"
            ghost
            @click="openLink(basic.gitee)"
          >
            Gitee
          </a-button>
        </div>
      </div>
    </div>

    <!-- 内容区 -->
    <div class="resume-body">
      <!-- 个人简介 -->
      <a-card class="card-section" hoverable :bordered="false">
        <template #title>
          <span class="section-title">👤 个人简介</span>
        </template>
        <div class="section-content">{{ profile }}</div>
      </a-card>

      <!-- 专业技能 -->
      <a-card class="card-section" hoverable :bordered="false">
        <template #title>
          <span class="section-title">🚀 专业技能</span>
        </template>
        <a-row :gutter="[16, 16]">
          <a-col
            :xs="24"
            :sm="12"
            :lg="8"
            v-for="(item, idx) in skills"
            :key="idx"
          >
            <div class="skill-card">
              <div class="skill-title">{{ item.title }}</div>
              <div class="skill-content">{{ item.desc }}</div>
            </div>
          </a-col>
        </a-row>
      </a-card>

      <!-- 工作经历 -->
      <a-card class="card-section" hoverable :bordered="false">
        <template #title>
          <span class="section-title">💼 工作经历</span>
        </template>
        <a-timeline mode="left" class="timeline">
          <a-timeline-item v-for="(item, idx) in works" :key="idx" color="blue">
            <div class="timeline-head">
              <span class="company">{{ item.company }}</span>
              <span class="post">{{ item.post }}</span>
              <span class="date">{{ item.date }}</span>
            </div>
            <div class="timeline-desc" v-html="item.desc"></div>
          </a-timeline-item>
        </a-timeline>
      </a-card>

      <!-- 项目经历 -->
      <a-card class="card-section" hoverable :bordered="false">
        <template #title>
          <span class="section-title">📦 项目经历</span>
        </template>
        <a-collapse
          v-model:activeKey="activeProjects"
          :bordered="false"
          class="collapse"
        >
          <a-collapse-panel
            v-for="(p, idx) in projects"
            :key="idx"
            :header="p.name"
          >
            <div class="project-stack">
              <a-tag color="green">{{ p.stack }}</a-tag>
            </div>
            <div class="project-desc">{{ p.desc }}</div>
            <div class="project-result">
              <p class="result-title">✅ 职责与成果</p>
              <ul>
                <li v-for="(res, i) in p.result" :key="i">{{ res }}</li>
              </ul>
            </div>
          </a-collapse-panel>
        </a-collapse>
      </a-card>
    </div>

    <!-- 底部 -->
    <div class="resume-footer">
      <p>© 2026 {{ basic.name }} - 前端工程师个人简历</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';

const containerRef = ref<HTMLElement | null>(null);
const particleCanvas = ref<HTMLCanvasElement | null>(null);
const activeProjects = ref<string[]>(['0']);

// 主题：根据时间自动设置默认
const getDefaultTheme = () => {
  const hour = new Date().getHours();
  return hour >= 18 || hour < 6;
};

const isDark = ref(getDefaultTheme());
const themeClass = computed(() =>
  isDark.value ? 'theme-dark' : 'theme-light'
);

const toggleTheme = () => {
  isDark.value = !isDark.value;
};

const openLink = (url: string) => {
  window.open(url, '_blank');
};

// ====================== 光粒子动效 ======================
let animationId: number;
interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

const initParticles = () => {
  const canvas = particleCanvas.value;
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const setCanvasSize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  setCanvasSize();
  window.addEventListener('resize', setCanvasSize);

  const particles: Particle[] = [];
  const particleCount = Math.floor(window.innerWidth / 10);

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.5 + 0.5,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      color: isDark.value 
        ? 'rgba(255, 255, 255, 0.9)' 
        : 'rgba(54, 136, 244, 0.5)',
    });

  }
console.log('isDark.value',isDark.value)
  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();

      p.x += p.speedX;
      p.y += p.speedY;

      if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
      if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
    });
    animationId = requestAnimationFrame(draw);
  };
  draw();

  return () => {
    window.removeEventListener('resize', setCanvasSize);
    cancelAnimationFrame(animationId);
  };
};

// ====================== 简历内容 ======================
const basic = ref({
  name: '安声桂',
  age: 30,
  phone: '13411066453',
  email: '13411066453@139.com',
  education: '本科 | 中山大学新华学院(现广州新华学院) | 软件工程',
  intent: ['中高级前端工程师', 'H5前端工程师', 'AI前端工程师'],
  github: 'https://github.com/anshenggui',
  gitee: 'https://gitee.com/anshenggui114',
});

const profile = ref(
  `5年+互联网Web/H5前端开发经验,主栈React+TypeScript,兼顾Vue全栈开发,深耕企业SaaS、金融H5、数据可视化、3D可视化、AI智能应用开发领域。具备完整的需求评审、技术方案设计、架构搭建、功能开发、性能优化、线上部署运维全链路能力。长期负责ToB后台系统、金融级H5应用、企业邮件系统、文博管理平台研发,擅长前端工程化落地、自定义组件封装、权限架构设计、复杂场景性能优化;同时拓展AI前端能力,熟练使用LangChain、LangGraph开发Agent智能应用、对接LLM大模型API。具备极强的跨部门协作、问题攻坚、需求落地能力,能够独立完成项目0-1架构搭建与迭代,适配中高级前端研发、AI前端开发岗位需求。`
);

const skills = ref([
  {
    title: '基础能力',
    desc: '熟练掌握 HTML5/CSS3/ES6+、Less/Sass，精通 JavaScript 异步机制、浏览器渲染原理、跨域与缓存、移动端兼容适配，熟悉 HTTP/HTTPS/TCP/IP 网络协议。',
  },
  {
    title: '核心技术栈',
    desc: '精通 React、TypeScript、React-Router、Styled-components；熟练 Vue2/Vue3、Vuex、Vue-Router，熟练 AntD、ElementUI、Vant 等主流UI组件库。',
  },
  {
    title: '工程化能力',
    desc: '熟练 webpack/Vite 构建打包、分包优化、资源压缩；精通 Git 工作流、版本管理、分支迭代；具备项目从零搭建、规范落地、构建优化经验。',
  },
  {
    title: '高阶业务能力',
    desc: '擅长自定义Hooks、通用业务组件、工具函数封装；熟练 RBAC精细化权限系统、动态路由渲染、单点登录、跨系统通信；掌握 ECharts 数据可视化、Lottie动画、Canvas绘图、Three.js文物3D模型渲染。',
  },
  {
    title: 'AI&服务端拓展',
    desc: '熟悉 Next.js、Nest、Koa 基础开发；掌握 LangChain、LangGraph，可独立开发 AI Agent 智能应用、对接 LLM 大模型API，具备AI前端落地实践经验。',
  },
]);

const works = ref([
  {
    company: '信雅达科技股份有限公司',
    post: '前端开发工程师',
    date: '2024.09 - 2025.06',
    desc: `外派平安银行,负责银行金融级H5应用及后台管理系统研发迭代,承接信用卡分期、借现金、分期中心、总账分期等核心金融业务,负责功能迭代、动态化配置、版本灰度、前端埋点与线上稳定性维护,保障金融业务高稳定、高可用运行。<br/>独立负责信用卡分期中心、橙意计划、随享金等金融H5核心模块开发<br/>接入AB版本控制方案,实现功能灰度切换、版本静默更新,降低业务试错成本60%<br/>针对金融敏感业务实现页面曝光、用户点击全量埋点,助力产品转化率提升15%<br/>基于橱窗配置方案实现页面组件、活动模块动态下发,迭代效率提升40%`,
  },
  {
    company: '彩讯科技股份有限公司',
    post: '前端开发工程师',
    date: '2021.09 - 2024.04',
    desc: `负责企业级RichMail邮件系统Web端、H5端及后台管理系统全流程研发,覆盖用户邮件收发、会议协作、文件管理、企业权限管控、数据统计等核心场景,主导项目性能优化、组件封装、架构迭代与线上问题治理。<br/>优化邮件请求逻辑,减少30%无效接口请求,降低服务器压力<br/>封装通用业务组件、工具函数与请求方法,组件复用率提升55%<br/>实现邮件大文件分片上传、断点续传,大文件上传成功率提升90%<br/>负责需求评审、开发、BUG修复、部署、运维全流程工作`,
  },
  {
    company: '深圳市华图测控系统有限公司',
    post: '前端开发工程师',
    date: '2020.03 - 2021.09',
    desc: `负责文博文物管理平台、综合权限管理系统研发,面向博物馆政企客户,实现文物信息管理、3D模型展示、出入库流程签发、系统权限管控、多系统单点登录等核心能力,支撑政企文博数字化业务落地。<br/>基于Three.js实现文物3D模型交互效果,结合Canvas完成电子签名、一键截图<br/>基于Token实现单点登录,搭建完整RBAC权限体系,精准管控页面、按钮、接口权限<br/>基于ECharts实现文物流转数据、用户行为数据可视化统计`,
  },
  {
    company: '析研科技有限公司',
    post: '前端开发工程师',
    date: '2019.12 - 2020.02',
    desc: '负责高校教育类Web管理系统功能开发与页面适配,完成课程管理、用户管理、数据展示等基础模块开发,快速积累Web后台系统开发与需求落地经验。',
  },
  {
    company: '鲁班长科技有限公司',
    post: '前端实习生',
    date: '2019.06 - 2019.07',
    desc: '参与人脸签到管理系统前端开发、页面搭建与功能调试,夯实前端基础编码、组件开发与接口联调能力。',
  },
]);

const projects = ref([
  {
    name: '银行分期中心橙意计划(金融H5)',
    stack: 'Vue2 + Vuex + Lottie + 橱窗动态配置',
    desc: '平安银行信用卡增值服务H5项目,面向信用卡LV0-LV4等级用户,集成账单管理、借现金、备用金、信用卡分期、用户权益抽奖、等级升级指引等功能,用于银行信用卡用户促活与流量转化,支撑千万级用户访问。',
    result: [
      '独立负责项目核心页面开发、动画交互、权限配置、用户行为埋点与功能迭代',
      '基于Lottie动画实现流畅抽奖滚动交互,提升用户体验',
      '结合橱窗配置、白名单机制实现抽奖功能灰度展示,保障金融业务合规性',
      '完成页面曝光、点击全量埋点,有效提升用户活跃度18%',
    ],
  },
  {
    name: 'RichMail企业邮件系统(H5+Web)',
    stack: 'Vue3 + Vant / React + TS + AntD + Less',
    desc: '面向政企客户的专业企业邮箱系统,涵盖邮件收发、草稿管理、文件上传、会议协作、网盘存储、日历日程、举报管理等全场景能力,服务政企办公数字化。',
    result: [
      '负责前后端接口联调、核心功能开发、性能优化、组件封装与系统维护',
      '实现邮件大文件分片上传、断点续传,大文件上传稳定性提升90%',
      '自定义Tree组件、权限Hooks、通用弹窗与搜索组件,团队重复开发量减少40%',
      '优化邮件请求逻辑,合并冗余接口、异步分片渲染长列表,页面加载速度提升35%',
    ],
  },
  {
    name: 'RichMail邮件系统管理后台',
    stack: 'React + TypeScript + AntD + Styled-components',
    desc: '企业邮箱后台管控系统,面向企业管理员,实现员工角色管理、精细化权限分配、账号登录统计、访问量监控、网盘容量管控、日志报表数据分析等能力。',
    result: [
      '负责权限架构、数据可视化、公共组件封装与页面适配优化',
      '封装usePermission自定义Hooks,实现全局页面权限、按钮权限双层管控',
      '开发日志报表、企业管理、邮件群组模块,基于ECharts实现运营数据可视化',
      '统一全局组件样式与自适应布局,提升后台系统通用性与美观度',
    ],
  },
  {
    name: '文物博物馆数字化管理平台',
    stack: 'React + AntD + Three.js + ECharts + Canvas',
    desc: '面向文博机构的数字化管理系统,支持文物信息录入、编辑、查询、出入库流程审批、3D文物展示、运营数据统计,实现文博资源数字化管理。',
    result: [
      '独立负责文物展示、数据统计、特色交互功能开发',
      '基于Three.js实现文物3D模型渲染、缩放、旋转、拖拽交互,还原文物立体展示效果',
      '通过Canvas实现电子签名、页面截图功能,完善文物审批流转场景',
      '基于ECharts搭建文物出入库、借阅数据统计看板,助力文博数据数字化管控',
    ],
  },
  {
    name: '综合权限管理系统',
    stack: 'Vue2 + ElementUI + ECharts + Sass',
    desc: '通用后台权限管理平台,支持多子系统统一登录、动态路由、角色权限管控、跨系统数据通信,实现多平台一体化管理。',
    result: [
      '主导系统权限架构搭建与核心功能开发',
      '设计并落地全局RBAC权限体系,实现按钮、页面、接口多层级权限管控',
      '基于Token实现单点登录,通过postMessage完成父子系统跨域数据通信',
      '动态渲染路由菜单,适配不同角色账号,提升系统安全性与扩展性',
    ],
  },
  {
    name: '图片识别生成菜谱AI Agent应用(个人项目)',
    stack:
      'Next.js + React + TypeScript + LangChain + LangGraph + FastAPI + SQLite + Tavily Search',
    desc: '独立开发AI驱动的菜谱推荐开源应用,聚焦解决用户“有食材不知做什么”的核心痛点,支持图片上传智能识别食材、基于食材智能搜索推荐适配菜谱,打通从图片识别到可操作食谱的完整链路,提升用户烹饪决策效率。',
    result: [
      '基于Next.js搭建前端工程架构,实现响应式界面与图片拖拽上传、实时预览功能,组件复用率达65%',
      '集成LangChain+LangGraph构建Agent智能工作流,实现图片识别→食材解析→菜谱搜索自动化流程',
      '设计SQLite会话存储方案,实现历史对话记录与用户偏好记忆,历史查询响应时间<500ms',
      '对接Tavily Search实现外部菜谱数据检索,配合FastAPI完成前后端联调',
      '端到端流程响应时间<3秒,图片识别准确率达92%,支持500+食材智能匹配',
      '首屏加载时间<1.8秒,用户交互流畅度提升40%',
    ],
  },
]);

onMounted(() => {
  if (containerRef.value) containerRef.value.style.opacity = '1';
  initParticles();
});

onUnmounted(() => {
  cancelAnimationFrame(animationId);
});
</script>

<style lang="scss" scoped>
// 深色
$dark-bg: #0a0e27;
$dark-header: linear-gradient(135deg, #11183a 0%, #1a2352 100%);
$dark-text: #fff;
$dark-sub: #c3c9e8;
$dark-light: #e3e7ff;
$dark-card: rgba(20, 28, 60, 0.6);
$dark-skill: rgba(26, 35, 82, 0.4);

// 浅色
$light-bg: #f7f8fa;
$light-header: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
$light-text: #121212;
$light-sub: #2d3748;
$light-light: #0a0a0a;
$light-card: #ffffff;
$light-skill: #f0f7ff;

$color-blue: #4fc3f7;
$color-cyan: #81d4fa;
$shadow-blue: rgba(0, 110, 255, 0.15);

// 粒子背景
.particle-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  pointer-events: none;
}

.resume-container {
  min-height: 100vh;
  padding-bottom: 60px;
  opacity: 0;
  transition: opacity 0.8s ease;
  position: relative;
  z-index: 2;

  &.theme-dark {
    background: $dark-bg;
    color: $dark-text;
  }
  &.theme-light {
    background: $light-bg;
    color: $light-text;
  }
}

.theme-switch {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 999;
}

.iconfont {
  font-size: 18px;
  vertical-align: middle;
}

.resume-header {
  position: relative;
  padding: 60px 20px 80px;
  text-align: center;
  overflow: hidden;
  transition: background 0.3s;
  z-index: 3;

  .theme-dark & {
    background: $dark-header;
  }
  .theme-light & {
    background: $light-header;
  }

  .header-glow {
    position: absolute;
    top: -200px;
    left: 50%;
    transform: translateX(-50%);
    width: 800px;
    height: 400px;
    background: radial-gradient(
      circle,
      rgba(30, 130, 255, 0.25),
      transparent 70%
    );
    z-index: 0;
  }

  .header-content {
    position: relative;
    z-index: 1;
  }

  .name {
    font-size: 42px;
    font-weight: 800;
    margin: 0;
    background: linear-gradient(90deg, $color-blue, $color-cyan);
    -webkit-background-clip: text;
    background-clip: text;

    .theme-dark & {
      color: $dark-light;
    }
    .theme-light & {
      color: $light-light;
    }
  }

  .job {
    font-size: 18px;
    margin: 8px 0 20px;

    .theme-dark & {
      color: #aab7ef;
    }
    .theme-light & {
      color: $light-text;
      font-weight: 500;
    }
  }

  .contact-bar {
    display: flex;
    justify-content: center;
    margin-bottom: 24px;
  }

  .link-group {
    display: flex;
    gap: 12px;
    justify-content: center;

    .github-btn {
      .theme-light & {
        border-color: $color-blue;
        color: $color-blue;
      }
    }
    .gitee-btn {
      .theme-light & {
        background-color: $color-blue;
        border-color: $color-blue;
        color: #fff;
      }
    }
  }
}

.resume-body {
  max-width: 1200px;
  margin: -50px auto 0;
  padding: 0 20px;
  position: relative;
  z-index: 3;
}

.card-section {
  margin-bottom: 24px;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s;
  position: relative;
  z-index: 3;

  .theme-dark & {
    background: $dark-card;
    backdrop-filter: blur(10px);
    box-shadow:
      0 8px 24px rgba(0, 0, 0, 0.3),
      0 2px 10px rgba(79, 195, 247, 0.1);
  }
  .theme-light & {
    background: $light-card;
    box-shadow:
      0 4px 16px rgba(0, 0, 0, 0.08),
      0 2px 6px rgba(0, 110, 255, 0.05);
  }

  &:hover {
    transform: translateY(-4px);

    .theme-dark & {
      box-shadow:
        0 14px 36px rgba(0, 0, 0, 0.4),
        0 0 18px rgba(79, 195, 247, 0.18);
    }
    .theme-light & {
      box-shadow:
        0 10px 28px rgba(0, 0, 0, 0.12),
        0 4px 12px rgba(0, 110, 255, 0.08);
    }
  }

  :deep(.ant-card-head) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);

    .theme-light & {
      border-color: #f0f0f0;
    }
  }

  :deep(.ant-card-head-title) {
    font-size: 20px;
    font-weight: 600;

    .theme-dark & {
      color: $dark-light;
    }
    .theme-light & {
      color: $light-light;
    }
  }

  :deep(.ant-card-body) {
    .theme-dark & {
      color: $dark-sub;
    }
    .theme-light & {
      color: $light-sub;
    }
  }
}

.section-title {
  font-weight: 600;
}
.section-content {
  line-height: 1.8;
  font-size: 15px;
}

.skill-card {
  padding: 16px;
  border-radius: 12px;
  height: 100%;

  .theme-dark & {
    background: $dark-skill;
  }
  .theme-light & {
    background: $light-skill;
  }

  .skill-title {
    font-size: 16px;
    font-weight: 600;
    color: $color-blue;
    margin-bottom: 8px;
  }

  .skill-content {
    font-size: 14px;
    line-height: 1.6;

    .theme-dark & {
      color: #b3bbdf;
    }
    .theme-light & {
      color: #2d3748;
    }
  }
}

.timeline {
  :deep(.ant-timeline-item-head) {
    border-color: $color-blue;
  }
}
.timeline-head {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  margin-bottom: 8px;

  .company {
    font-size: 16px;
    font-weight: 600;

    .theme-dark & {
      color: $dark-light;
    }
    .theme-light & {
      color: $light-light;
    }
  }
  .post {
    color: $color-cyan;
    font-size: 14px;
  }
  .date {
    font-size: 13px;
    margin-left: auto;

    .theme-dark & {
      color: #94a0d0;
    }
    .theme-light & {
      color: #4a5568;
    }
  }
}
.timeline-desc {
  font-size: 14px;
  line-height: 1.7;

  .theme-dark & {
    color: $dark-light;
  }
  .theme-light & {
    color: $light-light;
  }
}

:deep(.ant-collapse) {
  background: transparent;
}
:deep(.ant-collapse-item) {
  .theme-dark & {
    border-color: rgba(255, 255, 255, 0.06);
  }
  .theme-light & {
    border-color: #e8e8e8;
  }
}
:deep(.ant-collapse-header) {
  font-weight: 500;

  .theme-dark & {
    color: $dark-light !important;
  }
  .theme-light & {
    color: $light-light !important;
  }
}

.project-stack {
  margin-bottom: 10px;
}
.project-desc {
  margin: 10px 0;
  line-height: 1.7;

  .theme-dark & {
    color: $dark-light;
  }
  .theme-light & {
    color: $light-light;
  }
}
.project-result {
  margin-top: 12px;

  .result-title {
    font-weight: 600;
    color: $color-blue;
    margin-bottom: 6px;
  }
  ul {
    padding-left: 20px;
    line-height: 1.7;

    .theme-dark & {
      color: $dark-light;
    }
    .theme-light & {
      color: $light-light;
    }
  }
}

.resume-footer {
  text-align: center;
  padding: 30px 20px;
  font-size: 14px;
  position: relative;
  z-index: 3;

  .theme-dark & {
    color: #7784b6;
  }
  .theme-light & {
    color: #4a5568;
  }
}

@media (max-width: 768px) {
  .name {
    font-size: 28px;
  }
  .timeline-head {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    .date {
      margin-left: 0;
    }
  }
}
</style>
