import type { RouteHandler } from '@hono/zod-openapi'
import type { postAuthRoute } from '../routes'

export const postAuthRouteHandler: RouteHandler<typeof postAuthRoute> = async (c) => {
  throw new Error('Not implemented')
}
