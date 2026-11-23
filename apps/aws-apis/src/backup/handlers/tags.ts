import type { RouteHandler } from '@hono/zod-openapi'
import type { getTagsResourceArnIndexRoute, postTagsResourceArnRoute } from '../routes'

export const getTagsResourceArnIndexRouteHandler: RouteHandler<
  typeof getTagsResourceArnIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTagsResourceArnRouteHandler: RouteHandler<
  typeof postTagsResourceArnRoute
> = async (c) => {
  throw new Error('Not implemented')
}
