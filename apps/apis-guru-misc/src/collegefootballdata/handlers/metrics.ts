import type { RouteHandler } from '@hono/zod-openapi'
import type { getMetricsWpPregameRoute, getMetricsWpRoute } from '../routes'

export const getMetricsWpRouteHandler: RouteHandler<typeof getMetricsWpRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getMetricsWpPregameRouteHandler: RouteHandler<
  typeof getMetricsWpPregameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
