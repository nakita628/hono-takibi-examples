import type { RouteHandler } from '@hono/zod-openapi'
import type { getTimeSeriesCrossRoute, getTimeSeriesRoute } from '../routes'

export const getTimeSeriesRouteHandler: RouteHandler<typeof getTimeSeriesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTimeSeriesCrossRouteHandler: RouteHandler<typeof getTimeSeriesCrossRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
