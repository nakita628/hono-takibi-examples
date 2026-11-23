import type { RouteHandler } from '@hono/zod-openapi'
import type { getEarningsOrdersIdRoute, getEarningsOrdersRoute } from '../routes'

export const getEarningsOrdersRouteHandler: RouteHandler<typeof getEarningsOrdersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getEarningsOrdersIdRouteHandler: RouteHandler<
  typeof getEarningsOrdersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
