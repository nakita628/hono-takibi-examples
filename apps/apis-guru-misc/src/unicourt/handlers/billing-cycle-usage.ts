import type { RouteHandler } from '@hono/zod-openapi'
import type { getBillingCycleUsageBillingCycleRoute } from '../routes'

export const getBillingCycleUsageBillingCycleRouteHandler: RouteHandler<
  typeof getBillingCycleUsageBillingCycleRoute
> = async (c) => {
  throw new Error('Not implemented')
}
