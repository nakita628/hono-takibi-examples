import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteUserRoute, postActionDeleteUserRoute } from '../routes'

export const getActionDeleteUserRouteHandler: RouteHandler<
  typeof getActionDeleteUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteUserRouteHandler: RouteHandler<
  typeof postActionDeleteUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}
