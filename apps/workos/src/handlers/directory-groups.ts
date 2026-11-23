import type { RouteHandler } from '@hono/zod-openapi'
import type { getDirectoryGroupsIdRoute, getDirectoryGroupsRoute } from '../routes'

export const getDirectoryGroupsRouteHandler: RouteHandler<typeof getDirectoryGroupsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getDirectoryGroupsIdRouteHandler: RouteHandler<
  typeof getDirectoryGroupsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
