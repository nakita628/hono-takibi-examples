import type { RouteHandler } from '@hono/zod-openapi'
import type { postRemoveClientDeviceRoute } from '../routes'

export const postRemoveClientDeviceRouteHandler: RouteHandler<
  typeof postRemoveClientDeviceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
