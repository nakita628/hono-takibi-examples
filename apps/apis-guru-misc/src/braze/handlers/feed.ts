import type { RouteHandler } from '@hono/zod-openapi'
import type { getFeedDataSeriesRoute, getFeedDetailsRoute, getFeedListRoute } from '../routes'

export const getFeedDataSeriesRouteHandler: RouteHandler<typeof getFeedDataSeriesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getFeedDetailsRouteHandler: RouteHandler<typeof getFeedDetailsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getFeedListRouteHandler: RouteHandler<typeof getFeedListRoute> = async (c) => {
  throw new Error('Not implemented')
}
