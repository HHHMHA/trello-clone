import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { Plan } from '../plan'
import PlanClient from '@/features/plans/clients'

export const usePlansStore = defineStore('plans', () => {
  const plans = ref<Plan[]>([])

  const sortedPlans = computed(() => {
    return [...plans.value].sort((a, b) => a.name.localeCompare(b.name))
  })

  const getPlanById = (id: string) => {
    return plans.value.find((plan) => plan.id === id) || null
  }

  async function fetchPlans() {
    try {
      plans.value = await PlanClient.getList()
    } catch (error) {
      console.error('Failed to fetch plans:', error)
    }
  }

  return {
    plans,
    sortedPlans,
    getPlanById,
    fetchPlans
  }
})
