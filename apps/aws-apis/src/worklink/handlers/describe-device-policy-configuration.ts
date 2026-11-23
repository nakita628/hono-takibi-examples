import type { RouteHandler } from '@hono/zod-openapi'
import type { postDescribeDevicePolicyConfigurationRoute } from '../routes'

export const postDescribeDevicePolicyConfigurationRouteHandler: RouteHandler<
  typeof postDescribeDevicePolicyConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
