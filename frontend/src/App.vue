<template>
  <div class="app-shell">
    <aside class="app-side">
      <h1 class="app-title">海上钻井平台运营管理系统</h1>
      <nav class="nav-list">
        <RouterLink v-for="item in navItems" :key="item.path" :to="item.path" class="nav-item">
          {{ item.label }}
        </RouterLink>
      </nav>
    </aside>
    <main class="app-main">
      <header class="app-head">
        <span class="head-desc">面向海上钻井平台井位部署、钻具管理、泥浆循环、固井作业、井控设备与海洋环保全流程的海上钻井平台运营管理平台。</span>
        <span class="head-user">当前值班：{{ store.operator }} · {{ store.shiftLabel }}</span>
      </header>
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { useSessionStore } from '@/stores/session'

const store = useSessionStore()

const navItems = [{ label: "运营概览", path: "/" }, { label: "井位部署", path: "/well_plan" }, { label: "钻具管理", path: "/drill_pipe" }, { label: "泥浆循环", path: "/mud_system" }, { label: "套管程序", path: "/casing" }, { label: "固井作业", path: "/cementing" }, { label: "井控设备", path: "/bop" }, { label: "定向钻进", path: "/directional" }, { label: "测井作业", path: "/logging" }, { label: "取心作业", path: "/core_sample" }, { label: "平台拖航", path: "/rig_move" }, { label: "直升机倒班", path: "/helicopter" }, { label: "供应船调度", path: "/supply_vessel" }, { label: "海洋环保", path: "/marine_env" }, { label: "系泊系统", path: "/mooring" }, { label: "发电机组", path: "/power_gen" }, { label: "平台定员", path: "/personnel" }, { label: "应急演习", path: "/emergency_drill" }, { label: "水下设备", path: "/subsea_equip" }]
</script>
