import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionGetCallerIdentityRoute, postActionGetCallerIdentityRoute } from '../routes'

export const getActionGetCallerIdentityRouteHandler: RouteHandler<
  typeof getActionGetCallerIdentityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetCallerIdentityRouteHandler: RouteHandler<
  typeof postActionGetCallerIdentityRoute
> = async (c) => {
  throw new Error('Not implemented')
}
