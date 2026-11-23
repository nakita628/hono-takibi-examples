import type { RouteHandler } from '@hono/zod-openapi'
import type { postActionAddPermissionRoute } from '../routes'

export const postActionAddPermissionRouteHandler: RouteHandler<
  typeof postActionAddPermissionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
