import type { RouteHandler } from '@hono/zod-openapi'
import type { getRouteOutputFormatRoute, postRouteOutputFormatRoute } from '../routes'

export const getRouteOutputFormatRouteHandler: RouteHandler<
  typeof getRouteOutputFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRouteOutputFormatRouteHandler: RouteHandler<
  typeof postRouteOutputFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}
