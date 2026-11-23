import type { RouteHandler } from '@hono/zod-openapi'
import type { getTagsArnRoute } from '../routes'

export const getTagsArnRouteHandler: RouteHandler<typeof getTagsArnRoute> = async (c) => {
  throw new Error('Not implemented')
}
