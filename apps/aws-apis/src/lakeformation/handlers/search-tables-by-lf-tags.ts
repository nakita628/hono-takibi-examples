import type { RouteHandler } from '@hono/zod-openapi'
import type { postSearchTablesByLFTagsRoute } from '../routes'

export const postSearchTablesByLFTagsRouteHandler: RouteHandler<
  typeof postSearchTablesByLFTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
