import type { RouteHandler } from '@hono/zod-openapi'
import type { getLoggingOptionsRoute, postLoggingOptionsRoute } from '../routes'

export const getLoggingOptionsRouteHandler: RouteHandler<typeof getLoggingOptionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postLoggingOptionsRouteHandler: RouteHandler<typeof postLoggingOptionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
