import type { RouteHandler } from '@hono/zod-openapi'
import type { getTagsJsonRoute } from '../routes'

export const getTagsJsonRouteHandler: RouteHandler<typeof getTagsJsonRoute> = async (c) => {
  throw new Error('Not implemented')
}
