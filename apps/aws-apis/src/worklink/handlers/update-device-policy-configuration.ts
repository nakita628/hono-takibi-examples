import type { RouteHandler } from '@hono/zod-openapi'
import type { postUpdateDevicePolicyConfigurationRoute } from '../routes'

export const postUpdateDevicePolicyConfigurationRouteHandler: RouteHandler<
  typeof postUpdateDevicePolicyConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
