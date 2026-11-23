import type { RouteHandler } from '@hono/zod-openapi'
import type { postAuthoriseRoute } from '../routes'

export const postAuthoriseRouteHandler: RouteHandler<typeof postAuthoriseRoute> = async (c) => {
  throw new Error('Not implemented')
}
