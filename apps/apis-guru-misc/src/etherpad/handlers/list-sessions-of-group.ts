import type { RouteHandler } from '@hono/zod-openapi'
import type { getListSessionsOfGroupRoute, postListSessionsOfGroupRoute } from '../routes'

export const getListSessionsOfGroupRouteHandler: RouteHandler<
  typeof getListSessionsOfGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postListSessionsOfGroupRouteHandler: RouteHandler<
  typeof postListSessionsOfGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
