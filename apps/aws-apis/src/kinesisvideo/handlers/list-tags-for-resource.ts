import type { RouteHandler } from '@hono/zod-openapi'
import type { postListTagsForResourceRoute } from '../routes'

export const postListTagsForResourceRouteHandler: RouteHandler<
  typeof postListTagsForResourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
