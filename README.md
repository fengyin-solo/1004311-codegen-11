# 海上钻井平台运营管理系统

面向海上钻井平台井位部署、钻具管理、泥浆循环、固井作业、井控设备与海洋环保全流程的海上钻井平台运营管理平台。

这是一个**纯前端**管理平台：Vue 3 + Vite + TypeScript，仓库里没有后端服务。业务数据由
`frontend/src/data/` 下的本地数据层提供：首次打开用示例数据播种，之后的登记、筛选与状态流转
结果都持久化在浏览器 `localStorage` 里，刷新或重开浏览器都还在。dev server 已关掉自动打开页面，
启动后按终端打印的地址手工打开。

## 目录结构

```text
.
├── frontend/                 Vue 3 + Vite + TypeScript 前端（唯一运行单元）
│   ├── src/views/            每个业务模块一个页面
│   ├── src/api/local-service.ts   本地数据服务：列表、筛选、动作流转、导出
│   ├── src/data/             模块元数据 / 示例数据 / localStorage 持久化
│   ├── src/stores/           会话与筛选状态
│   └── vite.config.ts        dev server 配置（open: false，无 /api 代理）
├── .gitignore
└── docker-compose.yml
```

## 启动

```bash
cd frontend
npm install
npm run dev
```

前端默认监听 `http://127.0.0.1:5173/`，dev server 不会自动打开浏览器，需要自己访问。

生产构建：

```bash
cd frontend
npm run build
```

## 业务模块

| 模块 | 目录 | 业务对象 | 主要字段 |
| --- | --- | --- | --- |
| 井位部署 | `well_plan` | 钻井井位 | 井位编号、井位名称、区块编号 |
| 钻具管理 | `drill_pipe` | 钻具 | 钻具编号、钻具类型、规格尺寸 |
| 泥浆循环 | `mud_system` | 泥浆性能 | 检测编号、检测井段、泥浆类型 |
| 套管程序 | `casing` | 套管柱 | 套管编号、套管层次、外径规格 |
| 固井作业 | `cementing` | 固井记录 | 固井编号、套管层次、水泥浆体系 |
| 井控设备 | `bop` | 防喷器组 | 设备编号、设备型号、压力等级 |
| 定向钻进 | `directional` | 定向记录 | 记录编号、当前井深、井斜角度 |
| 测井作业 | `logging` | 测井记录 | 测井编号、测井项目、测井井段 |
| 取心作业 | `core_sample` | 取心记录 | 取心编号、取心层位、取心筒次 |
| 平台拖航 | `rig_move` | 拖航记录 | 拖航编号、拖航类型、起点位置 |
| 直升机倒班 | `helicopter` | 飞行任务 | 任务编号、飞行日期、直升机型号 |
| 供应船调度 | `supply_vessel` | 供应任务 | 任务编号、供应类型、船舶名称 |
| 海洋环保 | `marine_env` | 环保记录 | 记录编号、监测项目、排放类型 |
| 系泊系统 | `mooring` | 系泊缆 | 缆绳编号、缆绳类型、破断强度 |
| 发电机组 | `power_gen` | 发电机组 | 机组编号、机组型号、额定功率 |
| 平台定员 | `personnel` | 平台人员 | 人员编号、姓名、岗位职务 |
| 应急演习 | `emergency_drill` | 演习记录 | 演习编号、演习类型、演习日期 |
| 水下设备 | `subsea_equip` | 水下设备 | 设备编号、设备类型、设计水深 |

## 约定

- 每个模块的页面在 `frontend/src/views/<模块>/index.vue`，页面只负责渲染，读写统一走
  `frontend/src/api/local-service.ts`。
- 字段、状态、动作与流转目标集中在 `frontend/src/data/modules.ts`；示例数据在
  `frontend/src/data/seed.ts`。
- 状态流转只允许在 `local-service.ts` 里改，页面组件不做业务判断。
- 想回到初始数据：清掉浏览器里 `offshore-rig-operations:entries` 这一项，或调用 `resetModule(模块)`。
