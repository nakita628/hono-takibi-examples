import type { RouteHandler } from '@hono/zod-openapi'
import type { getBillingCyclesRoute } from '../routes'

export const getBillingCyclesRouteHandler: RouteHandler<typeof getBillingCyclesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
