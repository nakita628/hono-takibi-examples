import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionTagUserRoute, postActionTagUserRoute } from '../routes'

export const getActionTagUserRouteHandler: RouteHandler<typeof getActionTagUserRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postActionTagUserRouteHandler: RouteHandler<typeof postActionTagUserRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
