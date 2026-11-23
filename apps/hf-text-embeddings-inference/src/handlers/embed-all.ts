import type { RouteHandler } from '@hono/zod-openapi'
import type { postEmbedAllRoute } from '../routes'

export const postEmbedAllRouteHandler: RouteHandler<typeof postEmbedAllRoute> = async (c) => {
  throw new Error('Not implemented')
}
