import config from '@/core/config'
import { MockPlanClient } from '@/features/plans/clients/mock/PlanClient'
import { LivePlanClient } from '@/features/plans/clients/live/PlanClient'

const PlanClient = config.api_client_mode == 'mock' ? MockPlanClient : LivePlanClient
export default PlanClient
