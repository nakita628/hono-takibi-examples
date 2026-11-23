import type { RouteHandler } from '@hono/zod-openapi'
import type { getAccountSupportedPlatformsJsonRoute } from '../routes'

export const getAccountSupportedPlatformsJsonRouteHandler: RouteHandler<
  typeof getAccountSupportedPlatformsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
