<template>
  <div class="resume-container">
    <!-- 顶部导航 -->
    <a-layout-header class="header">
      <div class="header-content">
        <h1 class="name">安声桂</h1>
        <p class="job-intention">
          中高级前端工程师 / H5前端工程师 / AI前端工程师
        </p>
      </div>
    </a-layout-header>

    <!-- 主体内容 -->
    <a-layout-content class="content">
      <div class="content-wrapper">
        <!-- 基本信息 -->
        <a-card title="基本信息" class="card">
          <a-descriptions :column="2" bordered>
            <a-descriptions-item label="年龄">30岁</a-descriptions-item>
            <a-descriptions-item label="工作年限">5年+ Web/H5前端开发经验</a-descriptions-item>
            <a-descriptions-item label="联系方式">13411066453</a-descriptions-item>
            <a-descriptions-item label="邮箱">13411066453@139.com</a-descriptions-item>
            <a-descriptions-item label="学历">本科</a-descriptions-item>
            <a-descriptions-item label="院校">广州新华学院（原中山大学新华学院）</a-descriptions-item>
            <a-descriptions-item label="专业">软件工程</a-descriptions-item>
            <a-descriptions-item label="开源地址">
              <a href="https://github.com/anshenggui" target="_blank">Github</a>
              |
              <a href="https://gitee.com/anshenggui114" target="_blank">Gitee</a>
            </a-descriptions-item>
          </a-descriptions>
        </a-card>

        <!-- 个人简介 -->
        <a-card title="个人简介" class="card">
          <p class="intro-text">
            5年+互联网Web/H5前端开发经验，主栈React+TypeScript，兼顾Vue全栈开发，深耕企业SaaS、金融H5、数据可视化、3D可视化、AI智能应用开发领域。具备完整的需求评审、技术方案设计、架构搭建、功能开发、性能优化、线上部署运维全链路能力。
          </p>
          <p class="intro-text">
            长期负责ToB后台系统、金融级H5应用、企业邮件系统、文博管理平台研发，擅长前端工程化落地、自定义组件封装、权限架构设计、复杂场景性能优化；同时拓展AI前端能力，熟练使用LangChain、LangGraph开发Agent智能应用、对接LLM大模型API。具备极强的跨部门协作、问题攻坚、需求落地能力，能够独立完成项目0-1架构搭建与迭代，适配中高级前端研发、AI前端开发岗位需求。
          </p>
        </a-card>

        <!-- 专业技能 -->
        <a-card title="专业技能" class="card">
          <a-row :gutter="[16, 16]">
            <a-col :xs="24" :sm="12" :md="6">
              <a-card size="small" title="基础能力" class="skill-card">
                <ul class="skill-list">
                  <li>HTML5/CSS3/ES6+、Less/Sass</li>
                  <li>JavaScript异步机制、浏览器渲染原理</li>
                  <li>跨域与缓存、移动端兼容适配</li>
                  <li>HTTP/HTTPS/TCP/IP网络协议</li>
                </ul>
              </a-card>
            </a-col>
            <a-col :xs="24" :sm="12" :md="6">
              <a-card size="small" title="核心技术栈" class="skill-card">
                <ul class="skill-list">
                  <li>React、TypeScript、React-Router</li>
                  <li>Vue2/Vue3、Vuex、Vue-Router</li>
                  <li>Styled-components、AntD、ElementUI、Vant</li>
                </ul>
              </a-card>
            </a-col>
            <a-col :xs="24" :sm="12" :md="6">
              <a-card size="small" title="工程化能力" class="skill-card">
                <ul class="skill-list">
                  <li>Webpack/Vite构建打包、分包优化</li>
                  <li>Git工作流、版本管理、分支迭代</li>
                  <li>项目从零搭建、规范落地、构建优化</li>
                </ul>
              </a-card>
            </a-col>
            <a-col :xs="24" :sm="12" :md="6">
              <a-card size="small" title="拓展能力" class="skill-card">
                <ul class="skill-list">
                  <li>自定义Hooks、通用组件封装</li>
                  <li>ECharts、Three.js、Canvas、Lottie</li>
                  <li>LangChain、LangGraph、LLM大模型对接</li>
                  <li>Next.js、Nest、Koa基础开发</li>
                </ul>
              </a-card>
            </a-col>
          </a-row>
        </a-card>

        <!-- 工作经历 -->
        <a-card title="工作经历" class="card">
          <a-timeline>
            <a-timeline-item>
              <div class="experience-item">
                <h3>信雅达科技股份有限公司 | 前端开发工程师</h3>
                <p class="time">2024.09 - 2025.06</p>
                <p class="company-desc">
                  外派平安银行，负责银行金融级H5应用及后台管理系统研发迭代，承接信用卡分期、借现金等核心金融业务，保障金融业务高稳定、高可用运行。
                </p>
                <ul class="achieve-list">
                  <li>
                    独立负责信用卡分期中心、橙意计划等金融H5核心模块开发，支撑银行线上信贷引流业务稳定运行。
                  </li>
                  <li>
                    接入AB版本控制方案，实现功能灰度切换，有效规避线上版本故障，降低业务试错成本60%。
                  </li>
                  <li>实现金融敏感业务全量埋点，助力产品转化率提升15%。</li>
                  <li>基于橱窗配置实现页面动态化更新，迭代效率提升40%。</li>
                </ul>
              </div>
            </a-timeline-item>
            <a-timeline-item>
              <div class="experience-item">
                <h3>彩讯科技股份有限公司 | 前端开发工程师</h3>
                <p class="time">2021.09 - 2024.04</p>
                <p class="company-desc">
                  负责企业级RichMail邮件系统全流程研发，主导项目性能优化、组件封装、架构迭代与线上问题治理。
                </p>
                <ul class="achieve-list">
                  <li>
                    优化邮件召回逻辑，减少30%无效接口请求，基于requestIdleCallback解决大批量数据页面卡顿问题。
                  </li>
                  <li>
                    封装通用业务组件与自定义usePermission
                    Hooks，组件复用率提升55%。
                  </li>
                  <li>
                    实现邮件大文件分片上传、断点续传，大文件上传成功率提升90%。
                  </li>
                  <li>
                    完成需求评审、开发、部署、运维全流程工作，保障企业级邮件系统全年稳定迭代。
                  </li>
                </ul>
              </div>
            </a-timeline-item>
            <a-timeline-item>
              <div class="experience-item">
                <h3>深圳市华图测控系统有限公司 | 前端开发工程师</h3>
                <p class="time">2020.03 - 2021.09</p>
                <p class="company-desc">
                  负责文博文物管理平台、综合权限管理系统研发，支撑政企文博数字化业务落地。
                </p>
                <ul class="achieve-list">
                  <li>
                    基于Three.js实现文物3D模型交互，结合Canvas完成电子签名、一键截图功能。
                  </li>
                  <li>搭建完整RBAC权限体系，实现单点登录与跨系统通信。</li>
                  <li>
                    基于ECharts实现文物流转数据可视化统计，助力数字化管理。
                  </li>
                </ul>
              </div>
            </a-timeline-item>
            <a-timeline-item>
              <div class="experience-item">
                <h3>析研科技有限公司 | 前端开发工程师</h3>
                <p class="time">2019.12 - 2020.02</p>
                <p class="company-desc">
                  负责高校教育类Web管理系统功能开发与页面适配，积累Web后台系统开发经验。
                </p>
              </div>
            </a-timeline-item>
            <a-timeline-item>
              <div class="experience-item">
                <h3>鲁班长科技有限公司 | 前端实习生</h3>
                <p class="time">2019.06 - 2019.07</p>
                <p class="company-desc">
                  参与人脸签到管理系统前端开发、页面搭建与功能调试，夯实前端基础能力。
                </p>
              </div>
            </a-timeline-item>
          </a-timeline>
        </a-card>

        <!-- 项目经历 -->
        <a-card title="项目经历" class="card">
          <a-collapse accordion>
            <a-collapse-panel key="1" header="银行分期中心橙意计划（金融H5）">
              <p class="project-tech">
                技术栈：Vue2 + Vuex + Lottie + 橱窗动态配置
              </p>
              <p class="project-desc">
                平安银行信用卡增值服务H5项目，面向千万级用户，集成账单管理、信用卡分期、用户权益抽奖等功能，用于用户促活与流量转化。
              </p>
              <ul class="project-achieve">
                <li>
                  落地抽奖、新手引导等核心功能，基于Lottie实现流畅抽奖交互，提升用户体验。
                </li>
                <li>结合橱窗配置实现抽奖功能灰度展示，保障金融业务合规性。</li>
                <li>完成全量埋点，有效提升用户活跃度18%。</li>
              </ul>
            </a-collapse-panel>
            <a-collapse-panel key="2" header="RichMail企业邮件系统（H5+Web）">
              <p class="project-tech">
                技术栈：Vue3 + Vant / React + TS + AntD + Less
              </p>
              <p class="project-desc">
                面向政企客户的专业企业邮箱系统，涵盖邮件收发、会议协作、网盘存储等全场景能力，服务政企办公数字化。
              </p>
              <ul class="project-achieve">
                <li>
                  实现邮件大文件分片上传、断点续传，大文件上传稳定性提升90%。
                </li>
                <li>自定义通用组件与权限Hooks，团队重复开发量减少40%。</li>
                <li>
                  优化请求逻辑，页面加载速度提升35%，服务器请求压力降低30%。
                </li>
              </ul>
            </a-collapse-panel>
            <a-collapse-panel key="3" header="RichMail邮件系统管理后台">
              <p class="project-tech">
                技术栈：React + TypeScript + AntD + Styled-components
              </p>
              <p class="project-desc">
                企业邮箱后台管控系统，面向企业管理员，实现角色管理、权限分配、数据统计等能力。
              </p>
              <ul class="project-achieve">
                <li>
                  封装usePermission自定义Hooks，实现页面/按钮双层权限管控。
                </li>
                <li>开发日志报表等模块，基于ECharts实现运营数据可视化。</li>
                <li>统一组件样式与自适应布局，提升系统通用性与美观度。</li>
              </ul>
            </a-collapse-panel>
            <a-collapse-panel key="4" header="文物博物馆数字化管理平台">
              <p class="project-tech">
                技术栈：React + AntD + Three.js + ECharts + Canvas
              </p>
              <p class="project-desc">
                面向文博机构的数字化管理系统，支持文物信息管理、3D展示、流程审批、数据统计等能力。
              </p>
              <ul class="project-achieve">
                <li>
                  基于Three.js实现文物3D模型渲染与交互，还原文物立体展示效果。
                </li>
                <li>
                  通过Canvas实现电子签名、页面截图功能，完善审批流转场景。
                </li>
                <li>基于ECharts搭建数据统计看板，助力文博数据数字化管控。</li>
              </ul>
            </a-collapse-panel>
            <a-collapse-panel key="5" header="综合权限管理系统">
              <p class="project-tech">
                技术栈：Vue2 + ElementUI + ECharts + Sass
              </p>
              <p class="project-desc">
                通用后台权限管理平台，支持多子系统统一登录、动态路由、跨系统通信，实现多平台一体化管理。
              </p>
              <ul class="project-achieve">
                <li>设计并落地RBAC权限体系，实现按钮/页面/接口多层级管控。</li>
                <li>基于Token实现单点登录，通过postMessage完成跨系统通信。</li>
                <li>
                  动态渲染路由菜单，可视化用户访问数据，提升系统安全性与扩展性。
                </li>
              </ul>
            </a-collapse-panel>
          </a-collapse>
        </a-card>
      </div>
    </a-layout-content>

    <!-- 底部 -->
    <a-layout-footer class="footer">
      <p>
        © 2026 安声桂 - 中高级前端工程师简历 |
        求职意向：中高级前端工程师、H5前端工程师、AI前端工程师
      </p>
    </a-layout-footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
  Layout,
  Card,
  Descriptions,
  Row,
  Col,
  Timeline,
  Collapse,
  Typography,
  Anchor,
} from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;
</script>

<style scoped>
/* 全局样式 */
.resume-container {
  min-height: 100vh;
  background-color: #f5f5f5;
}

/* 头部样式 */
.header {
  background-color: #1890ff;
  padding: 0;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
  color: white;
}

.name {
  margin: 0 0 8px 0;
  font-size: 28px;
  font-weight: 600;
}

.job-intention {
  margin: 0;
  font-size: 16px;
  opacity: 0.9;
}

/* 内容区域 */
.content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.card {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
}

/* 个人简介 */
.intro-text {
  line-height: 1.8;
  margin: 0 0 16px 0;
  color: #333;
}

/* 技能卡片 */
.skill-card {
  height: 100%;
}

.skill-list {
  margin: 0;
  padding-left: 20px;
  line-height: 1.8;
  color: #666;
}

/* 工作经历 */
.experience-item {
  padding: 8px 0;
}

.experience-item h3 {
  margin: 0 0 4px 0;
  font-size: 16px;
  font-weight: 600;
  color: #1890ff;
}

.time {
  margin: 0 0 8px 0;
  color: #999;
  font-size: 14px;
}

.company-desc {
  margin: 0 0 8px 0;
  line-height: 1.6;
  color: #666;
}

.achieve-list {
  margin: 0;
  padding-left: 20px;
  line-height: 1.8;
  color: #333;
}

/* 项目经历 */
.project-tech {
  margin: 0 0 8px 0;
  color: #1890ff;
  font-weight: 500;
}

.project-desc {
  margin: 0 0 8px 0;
  line-height: 1.6;
  color: #666;
}

.project-achieve {
  margin: 0;
  padding-left: 20px;
  line-height: 1.8;
  color: #333;
}

/* 底部样式 */
.footer {
  background-color: #1890ff;
  color: white;
  text-align: center;
  padding: 24px;
}

/* 响应式适配 */
@media (max-width: 768px) {
  .header-content {
    padding: 16px;
  }

  .name {
    font-size: 24px;
  }

  .content {
    padding: 16px;
  }

  .content-wrapper {
    gap: 16px;
  }
}
</style>
