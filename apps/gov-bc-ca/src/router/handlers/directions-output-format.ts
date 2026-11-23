import type { RouteHandler } from '@hono/zod-openapi'
import type { getDirectionsOutputFormatRoute, postDirectionsOutputFormatRoute } from '../routes'

export const getDirectionsOutputFormatRouteHandler: RouteHandler<
  typeof getDirectionsOutputFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDirectionsOutputFormatRouteHandler: RouteHandler<
  typeof postDirectionsOutputFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}
