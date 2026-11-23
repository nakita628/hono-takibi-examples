import type { RouteHandler } from '@hono/zod-openapi'
import type { postDeviceDetectRoute } from '../routes'

export const postDeviceDetectRouteHandler: RouteHandler<typeof postDeviceDetectRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
