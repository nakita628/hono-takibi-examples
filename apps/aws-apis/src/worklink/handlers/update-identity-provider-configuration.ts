import type { RouteHandler } from '@hono/zod-openapi'
import type { postUpdateIdentityProviderConfigurationRoute } from '../routes'

export const postUpdateIdentityProviderConfigurationRouteHandler: RouteHandler<
  typeof postUpdateIdentityProviderConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
