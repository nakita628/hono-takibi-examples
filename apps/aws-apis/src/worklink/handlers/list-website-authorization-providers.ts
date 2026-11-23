import type { RouteHandler } from '@hono/zod-openapi'
import type { postListWebsiteAuthorizationProvidersRoute } from '../routes'

export const postListWebsiteAuthorizationProvidersRouteHandler: RouteHandler<
  typeof postListWebsiteAuthorizationProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
