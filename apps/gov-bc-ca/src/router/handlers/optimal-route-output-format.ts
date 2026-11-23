import type { RouteHandler } from '@hono/zod-openapi'
import type { getOptimalRouteOutputFormatRoute, postOptimalRouteOutputFormatRoute } from '../routes'

export const getOptimalRouteOutputFormatRouteHandler: RouteHandler<
  typeof getOptimalRouteOutputFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOptimalRouteOutputFormatRouteHandler: RouteHandler<
  typeof postOptimalRouteOutputFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}
