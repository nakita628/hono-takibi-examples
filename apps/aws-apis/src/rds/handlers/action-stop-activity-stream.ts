import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionStopActivityStreamRoute, postActionStopActivityStreamRoute } from '../routes'

export const getActionStopActivityStreamRouteHandler: RouteHandler<
  typeof getActionStopActivityStreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionStopActivityStreamRouteHandler: RouteHandler<
  typeof postActionStopActivityStreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}
