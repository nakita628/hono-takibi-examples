import type { RouteHandler } from '@hono/zod-openapi'
import type { getSeriesIdRoute, getSeriesRoute } from '../routes'

export const getSeriesRouteHandler: RouteHandler<typeof getSeriesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSeriesIdRouteHandler: RouteHandler<typeof getSeriesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
