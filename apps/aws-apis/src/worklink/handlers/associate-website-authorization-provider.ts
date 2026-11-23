import type { RouteHandler } from '@hono/zod-openapi'
import type { postAssociateWebsiteAuthorizationProviderRoute } from '../routes'

export const postAssociateWebsiteAuthorizationProviderRouteHandler: RouteHandler<
  typeof postAssociateWebsiteAuthorizationProviderRoute
> = async (c) => {
  throw new Error('Not implemented')
}
