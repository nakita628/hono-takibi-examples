import type { RouteHandler } from '@hono/zod-openapi'
import type { getChartRoute, postChartRoute } from '../routes'

export const getChartRouteHandler: RouteHandler<typeof getChartRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postChartRouteHandler: RouteHandler<typeof postChartRoute> = async (c) => {
  throw new Error('Not implemented')
}
