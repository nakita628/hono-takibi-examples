import type { RouteHandler } from '@hono/zod-openapi'
import type { postCommentsCreateRoute } from '../routes'

export const postCommentsCreateRouteHandler: RouteHandler<typeof postCommentsCreateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
