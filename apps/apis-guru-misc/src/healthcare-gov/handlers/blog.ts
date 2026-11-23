import type { RouteHandler } from '@hono/zod-openapi'
import type { getBlogPageNameMediaTypeExtensionRoute } from '../routes'

export const getBlogPageNameMediaTypeExtensionRouteHandler: RouteHandler<
  typeof getBlogPageNameMediaTypeExtensionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
