import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetAppDeviceIdRoute } from '../routes'

export const postGetAppDeviceIdRouteHandler: RouteHandler<typeof postGetAppDeviceIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
