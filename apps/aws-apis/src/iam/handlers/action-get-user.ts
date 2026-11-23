import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionGetUserRoute, postActionGetUserRoute } from '../routes'

export const getActionGetUserRouteHandler: RouteHandler<typeof getActionGetUserRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postActionGetUserRouteHandler: RouteHandler<typeof postActionGetUserRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
