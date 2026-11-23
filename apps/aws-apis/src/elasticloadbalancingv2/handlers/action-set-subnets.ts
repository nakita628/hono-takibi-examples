import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionSetSubnetsRoute, postActionSetSubnetsRoute } from '../routes'

export const getActionSetSubnetsRouteHandler: RouteHandler<
  typeof getActionSetSubnetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionSetSubnetsRouteHandler: RouteHandler<
  typeof postActionSetSubnetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
