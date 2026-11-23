import type { RouteHandler } from '@hono/zod-openapi'
import type { getTagsResourceArnRoute, postTagsResourceArnRoute } from '../routes'

export const getTagsResourceArnRouteHandler: RouteHandler<typeof getTagsResourceArnRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postTagsResourceArnRouteHandler: RouteHandler<
  typeof postTagsResourceArnRoute
> = async (c) => {
  throw new Error('Not implemented')
}
