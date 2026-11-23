import type { RouteHandler } from '@hono/zod-openapi'
import type { getGroupsPidEpisodesRoute, getGroupsPopularEpisodesRoute } from '../routes'

export const getGroupsPopularEpisodesRouteHandler: RouteHandler<
  typeof getGroupsPopularEpisodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getGroupsPidEpisodesRouteHandler: RouteHandler<
  typeof getGroupsPidEpisodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
