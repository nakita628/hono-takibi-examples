import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionModifyUserRoute, postActionModifyUserRoute } from '../routes'

export const getActionModifyUserRouteHandler: RouteHandler<
  typeof getActionModifyUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyUserRouteHandler: RouteHandler<
  typeof postActionModifyUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}
