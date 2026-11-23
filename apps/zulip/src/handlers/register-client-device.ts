import type { RouteHandler } from '@hono/zod-openapi'
import type { postRegisterClientDeviceRoute } from '../routes'

export const postRegisterClientDeviceRouteHandler: RouteHandler<
  typeof postRegisterClientDeviceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
