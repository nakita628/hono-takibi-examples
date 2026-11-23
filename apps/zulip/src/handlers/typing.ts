import type { RouteHandler } from '@hono/zod-openapi'
import type { postTypingRoute } from '../routes'

export const postTypingRouteHandler: RouteHandler<typeof postTypingRoute> = async (c) => {
  throw new Error('Not implemented')
}
