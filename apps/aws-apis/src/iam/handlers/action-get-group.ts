import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionGetGroupRoute, postActionGetGroupRoute } from '../routes'

export const getActionGetGroupRouteHandler: RouteHandler<typeof getActionGetGroupRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postActionGetGroupRouteHandler: RouteHandler<typeof postActionGetGroupRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
