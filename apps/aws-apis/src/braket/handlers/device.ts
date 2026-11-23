import type { RouteHandler } from '@hono/zod-openapi'
import type { getDeviceDeviceArnRoute } from '../routes'

export const getDeviceDeviceArnRouteHandler: RouteHandler<typeof getDeviceDeviceArnRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
