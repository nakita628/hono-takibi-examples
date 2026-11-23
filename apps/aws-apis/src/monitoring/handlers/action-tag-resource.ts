import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionTagResourceRoute, postActionTagResourceRoute } from '../routes'

export const getActionTagResourceRouteHandler: RouteHandler<
  typeof getActionTagResourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionTagResourceRouteHandler: RouteHandler<
  typeof postActionTagResourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
