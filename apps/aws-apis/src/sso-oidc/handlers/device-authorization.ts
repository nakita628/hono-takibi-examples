import type { RouteHandler } from '@hono/zod-openapi'
import type { postDeviceAuthorizationRoute } from '../routes'

export const postDeviceAuthorizationRouteHandler: RouteHandler<
  typeof postDeviceAuthorizationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
