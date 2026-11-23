import type { RouteHandler } from '@hono/zod-openapi'
import type { postOcrRoute } from '../routes'

export const postOcrRouteHandler: RouteHandler<typeof postOcrRoute> = async (c) => {
  throw new Error('Not implemented')
}
