import type { RouteHandler } from '@hono/zod-openapi'
import type { getScheduledPaymentsRoute } from '../routes'

export const getScheduledPaymentsRouteHandler: RouteHandler<
  typeof getScheduledPaymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
