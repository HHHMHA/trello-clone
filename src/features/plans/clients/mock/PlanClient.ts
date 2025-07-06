import mockPlans from './mockPlans.json'
import type { Plan } from '@/features/plans/plan'

export const MockPlanClient = {
  async getList(): Promise<Plan[]> {
    return mockPlans
  },

  async getDetails(id: string): Promise<Plan> {
    const plan = mockPlans.find((p) => p.id === id)
    if (!plan) {
      // Simulate axios-like error
      throw {
        response: {
          status: 404,
          data: { message: 'Plan not found' }
        },
        message: 'Request failed with status code 404'
      }
    }
    return plan
  }
}
