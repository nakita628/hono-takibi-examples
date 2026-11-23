import type { RouteHandler } from '@hono/zod-openapi'
import type { getDeleteSessionRoute, postDeleteSessionRoute } from '../routes'

export const getDeleteSessionRouteHandler: RouteHandler<typeof getDeleteSessionRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postDeleteSessionRouteHandler: RouteHandler<typeof postDeleteSessionRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
