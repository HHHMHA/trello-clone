import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { Plan } from '../plan';

export const usePlansStore = defineStore('plans', () => {
  const plans = ref<Plan[]>([]);

  const sortedPlans = computed(() => {
    return [...plans.value].sort((a, b) => a.name.localeCompare(b.name));
  });

  const getPlanById = (id: string) => {
    return plans.value.find(plan => plan.id === id) || null;
  };

  return {
    plans,
    sortedPlans,
    getPlanById,
  };
});
