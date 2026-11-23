import type { RouteHandler } from '@hono/zod-openapi'
import type { getSearchMembersRoute, getSearchRoute } from '../routes'

export const getSearchRouteHandler: RouteHandler<typeof getSearchRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSearchMembersRouteHandler: RouteHandler<typeof getSearchMembersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
