import type { RouteHandler } from '@hono/zod-openapi'
import type { getSearchMembersIndexRoute, getSearchRoute } from '../routes'

export const getSearchRouteHandler: RouteHandler<typeof getSearchRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSearchMembersIndexRouteHandler: RouteHandler<
  typeof getSearchMembersIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
