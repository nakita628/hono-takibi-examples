import type { RouteHandler } from '@hono/zod-openapi'
import type { postCommentsDeleteRoute } from '../routes'

export const postCommentsDeleteRouteHandler: RouteHandler<typeof postCommentsDeleteRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
