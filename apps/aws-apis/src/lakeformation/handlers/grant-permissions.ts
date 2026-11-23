import type { RouteHandler } from '@hono/zod-openapi'
import type { postGrantPermissionsRoute } from '../routes'

export const postGrantPermissionsRouteHandler: RouteHandler<
  typeof postGrantPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
