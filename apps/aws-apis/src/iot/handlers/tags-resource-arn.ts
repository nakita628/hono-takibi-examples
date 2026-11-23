import type { RouteHandler } from '@hono/zod-openapi'
import type { getTagsResourceArnRoute } from '../routes'

export const getTagsResourceArnRouteHandler: RouteHandler<typeof getTagsResourceArnRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
