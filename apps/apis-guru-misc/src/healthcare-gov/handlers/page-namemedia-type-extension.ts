import type { RouteHandler } from '@hono/zod-openapi'
import type { getPageNameMediaTypeExtensionRoute } from '../routes'

export const getPageNameMediaTypeExtensionRouteHandler: RouteHandler<
  typeof getPageNameMediaTypeExtensionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
