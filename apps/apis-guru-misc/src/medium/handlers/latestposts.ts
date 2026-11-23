import type { RouteHandler } from '@hono/zod-openapi'
import type { getLatestpostsTopicSlugRoute } from '../routes'

export const getLatestpostsTopicSlugRouteHandler: RouteHandler<
  typeof getLatestpostsTopicSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}
