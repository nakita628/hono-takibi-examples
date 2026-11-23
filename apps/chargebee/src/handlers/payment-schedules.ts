import type { RouteHandler } from '@hono/zod-openapi'
import type { getPaymentSchedulesRoute } from '../routes'

export const getPaymentSchedulesRouteHandler: RouteHandler<
  typeof getPaymentSchedulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
