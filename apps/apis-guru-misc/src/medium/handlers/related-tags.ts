import type { RouteHandler } from '@hono/zod-openapi'
import type { getRelatedTagsTagRoute } from '../routes'

export const getRelatedTagsTagRouteHandler: RouteHandler<typeof getRelatedTagsTagRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
