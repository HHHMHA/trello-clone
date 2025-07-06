import { HttpClient } from '@/core/http-client'
import type { Plan } from '@/features/plans/plan'

export const PlanApiRoutes = {
  list: '/api/plans',
  details: (id: string) => `/api/plans/${id}`
}

export const LivePlanClient = {
  async getList(): Promise<Plan[]> {
    return await HttpClient.get<Plan[]>({
      url: PlanApiRoutes.list,
      requiresToken: false
    })
  },

  async getDetails(id: string): Promise<Plan> {
    return await HttpClient.get<Plan>({
      url: PlanApiRoutes.details(id),
      requiresToken: false
    })
  }
}
