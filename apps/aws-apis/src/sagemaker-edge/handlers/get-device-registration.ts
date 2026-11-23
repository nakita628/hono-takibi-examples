import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetDeviceRegistrationRoute } from '../routes'

export const postGetDeviceRegistrationRouteHandler: RouteHandler<
  typeof postGetDeviceRegistrationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
