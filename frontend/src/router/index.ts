import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '@/views/Dashboard.vue'
const WellPlan = () => import('@/views/well_plan/index.vue')
const DrillPipe = () => import('@/views/drill_pipe/index.vue')
const MudSystem = () => import('@/views/mud_system/index.vue')
const Casing = () => import('@/views/casing/index.vue')
const Cementing = () => import('@/views/cementing/index.vue')
const Bop = () => import('@/views/bop/index.vue')
const Directional = () => import('@/views/directional/index.vue')
const Logging = () => import('@/views/logging/index.vue')
const CoreSample = () => import('@/views/core_sample/index.vue')
const RigMove = () => import('@/views/rig_move/index.vue')
const Helicopter = () => import('@/views/helicopter/index.vue')
const SupplyVessel = () => import('@/views/supply_vessel/index.vue')
const MarineEnv = () => import('@/views/marine_env/index.vue')
const Mooring = () => import('@/views/mooring/index.vue')
const PowerGen = () => import('@/views/power_gen/index.vue')
const Personnel = () => import('@/views/personnel/index.vue')
const EmergencyDrill = () => import('@/views/emergency_drill/index.vue')
const SubseaEquip = () => import('@/views/subsea_equip/index.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'dashboard', component: Dashboard },
    { path: '/well_plan', name: 'well_plan', component: WellPlan },
    { path: '/drill_pipe', name: 'drill_pipe', component: DrillPipe },
    { path: '/mud_system', name: 'mud_system', component: MudSystem },
    { path: '/casing', name: 'casing', component: Casing },
    { path: '/cementing', name: 'cementing', component: Cementing },
    { path: '/bop', name: 'bop', component: Bop },
    { path: '/directional', name: 'directional', component: Directional },
    { path: '/logging', name: 'logging', component: Logging },
    { path: '/core_sample', name: 'core_sample', component: CoreSample },
    { path: '/rig_move', name: 'rig_move', component: RigMove },
    { path: '/helicopter', name: 'helicopter', component: Helicopter },
    { path: '/supply_vessel', name: 'supply_vessel', component: SupplyVessel },
    { path: '/marine_env', name: 'marine_env', component: MarineEnv },
    { path: '/mooring', name: 'mooring', component: Mooring },
    { path: '/power_gen', name: 'power_gen', component: PowerGen },
    { path: '/personnel', name: 'personnel', component: Personnel },
    { path: '/emergency_drill', name: 'emergency_drill', component: EmergencyDrill },
    { path: '/subsea_equip', name: 'subsea_equip', component: SubseaEquip },
  ],
})

export default router
