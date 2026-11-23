import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCreateUserRoute, postActionCreateUserRoute } from '../routes'

export const getActionCreateUserRouteHandler: RouteHandler<
  typeof getActionCreateUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateUserRouteHandler: RouteHandler<
  typeof postActionCreateUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}
