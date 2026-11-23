import type { RouteHandler } from '@hono/zod-openapi'
import type { postDescribeDeviceRoute } from '../routes'

export const postDescribeDeviceRouteHandler: RouteHandler<typeof postDescribeDeviceRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
