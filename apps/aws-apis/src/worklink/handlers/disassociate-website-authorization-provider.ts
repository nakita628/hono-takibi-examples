import type { RouteHandler } from '@hono/zod-openapi'
import type { postDisassociateWebsiteAuthorizationProviderRoute } from '../routes'

export const postDisassociateWebsiteAuthorizationProviderRouteHandler: RouteHandler<
  typeof postDisassociateWebsiteAuthorizationProviderRoute
> = async (c) => {
  throw new Error('Not implemented')
}
