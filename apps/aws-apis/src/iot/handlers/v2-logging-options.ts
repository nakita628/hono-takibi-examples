import type { RouteHandler } from '@hono/zod-openapi'
import type { getV2LoggingOptionsRoute, postV2LoggingOptionsRoute } from '../routes'

export const getV2LoggingOptionsRouteHandler: RouteHandler<
  typeof getV2LoggingOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2LoggingOptionsRouteHandler: RouteHandler<
  typeof postV2LoggingOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
