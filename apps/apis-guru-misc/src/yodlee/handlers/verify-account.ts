import type { RouteHandler } from '@hono/zod-openapi'
import type { postVerifyAccountProviderAccountIdRoute } from '../routes'

export const postVerifyAccountProviderAccountIdRouteHandler: RouteHandler<
  typeof postVerifyAccountProviderAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
