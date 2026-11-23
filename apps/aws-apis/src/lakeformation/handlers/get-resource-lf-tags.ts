import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetResourceLFTagsRoute } from '../routes'

export const postGetResourceLFTagsRouteHandler: RouteHandler<
  typeof postGetResourceLFTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
