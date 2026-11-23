import type { RouteHandler } from '@hono/zod-openapi'
import type { getRoutingNumbersRoute } from '../routes'

export const getRoutingNumbersRouteHandler: RouteHandler<typeof getRoutingNumbersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
