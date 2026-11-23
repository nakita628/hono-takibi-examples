import type { RouteHandler } from '@hono/zod-openapi'
import type { postListTagsForStreamRoute } from '../routes'

export const postListTagsForStreamRouteHandler: RouteHandler<
  typeof postListTagsForStreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}
