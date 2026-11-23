import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCancelUpdateStackRoute, postActionCancelUpdateStackRoute } from '../routes'

export const getActionCancelUpdateStackRouteHandler: RouteHandler<
  typeof getActionCancelUpdateStackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCancelUpdateStackRouteHandler: RouteHandler<
  typeof postActionCancelUpdateStackRoute
> = async (c) => {
  throw new Error('Not implemented')
}
