import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionAddPermissionRoute, postActionAddPermissionRoute } from '../routes'

export const getActionAddPermissionRouteHandler: RouteHandler<
  typeof getActionAddPermissionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAddPermissionRouteHandler: RouteHandler<
  typeof postActionAddPermissionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
