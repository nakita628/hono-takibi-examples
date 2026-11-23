import type { RouteHandler } from '@hono/zod-openapi'
import type { getListAllGroupsRoute, postListAllGroupsRoute } from '../routes'

export const getListAllGroupsRouteHandler: RouteHandler<typeof getListAllGroupsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postListAllGroupsRouteHandler: RouteHandler<typeof postListAllGroupsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
