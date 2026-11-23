import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteGroupRoute, postActionDeleteGroupRoute } from '../routes'

export const getActionDeleteGroupRouteHandler: RouteHandler<
  typeof getActionDeleteGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteGroupRouteHandler: RouteHandler<
  typeof postActionDeleteGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
