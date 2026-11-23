import type { RouteHandler } from '@hono/zod-openapi'
import type { getTopWriterTopicSlugRoute } from '../routes'

export const getTopWriterTopicSlugRouteHandler: RouteHandler<
  typeof getTopWriterTopicSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}
