import type { RouteHandler } from '@hono/zod-openapi'
import type { postDescribeIdentityProviderConfigurationRoute } from '../routes'

export const postDescribeIdentityProviderConfigurationRouteHandler: RouteHandler<
  typeof postDescribeIdentityProviderConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
