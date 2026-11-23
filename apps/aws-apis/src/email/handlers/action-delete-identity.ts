import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteIdentityRoute, postActionDeleteIdentityRoute } from '../routes'

export const getActionDeleteIdentityRouteHandler: RouteHandler<
  typeof getActionDeleteIdentityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteIdentityRouteHandler: RouteHandler<
  typeof postActionDeleteIdentityRoute
> = async (c) => {
  throw new Error('Not implemented')
}
