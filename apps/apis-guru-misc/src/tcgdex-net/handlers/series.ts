import type { RouteHandler } from '@hono/zod-openapi'
import type { getSeriesRoute, getSeriesSerieRoute } from '../routes'

export const getSeriesRouteHandler: RouteHandler<typeof getSeriesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSeriesSerieRouteHandler: RouteHandler<typeof getSeriesSerieRoute> = async (c) => {
  throw new Error('Not implemented')
}
