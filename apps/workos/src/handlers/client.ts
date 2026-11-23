import type { RouteHandler } from '@hono/zod-openapi'
import type { postClientTokenRoute } from '../routes'

export const postClientTokenRouteHandler: RouteHandler<typeof postClientTokenRoute> = async (c) => {
  throw new Error('Not implemented')
}
