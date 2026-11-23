import type { RouteHandler } from '@hono/zod-openapi'
import type { getStandingOrdersRoute } from '../routes'

export const getStandingOrdersRouteHandler: RouteHandler<typeof getStandingOrdersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
