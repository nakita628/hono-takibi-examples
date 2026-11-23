import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetLastEditedRoute, postGetLastEditedRoute } from '../routes'

export const getGetLastEditedRouteHandler: RouteHandler<typeof getGetLastEditedRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postGetLastEditedRouteHandler: RouteHandler<typeof postGetLastEditedRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
