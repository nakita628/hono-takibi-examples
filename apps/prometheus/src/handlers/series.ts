import type { RouteHandler } from '@hono/zod-openapi'
import type { getSeriesRoute, postSeriesRoute } from '../routes'

export const getSeriesRouteHandler: RouteHandler<typeof getSeriesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSeriesRouteHandler: RouteHandler<typeof postSeriesRoute> = async (c) => {
  throw new Error('Not implemented')
}
