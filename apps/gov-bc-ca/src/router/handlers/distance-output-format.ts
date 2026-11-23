import type { RouteHandler } from '@hono/zod-openapi'
import type { getDistanceOutputFormatRoute, postDistanceOutputFormatRoute } from '../routes'

export const getDistanceOutputFormatRouteHandler: RouteHandler<
  typeof getDistanceOutputFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDistanceOutputFormatRouteHandler: RouteHandler<
  typeof postDistanceOutputFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}
