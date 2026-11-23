import type { RouteHandler } from '@hono/zod-openapi'
import type { postEmbedRoute } from '../routes'

export const postEmbedRouteHandler: RouteHandler<typeof postEmbedRoute> = async (c) => {
  throw new Error('Not implemented')
}
