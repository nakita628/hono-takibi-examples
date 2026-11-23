import type { RouteHandler } from '@hono/zod-openapi'
import type { getSeriesRoute, getSeriesSearchRoute, postSeriesSearchRoute } from '../routes'

export const getSeriesRouteHandler: RouteHandler<typeof getSeriesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSeriesSearchRouteHandler: RouteHandler<typeof getSeriesSearchRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSeriesSearchRouteHandler: RouteHandler<typeof postSeriesSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
