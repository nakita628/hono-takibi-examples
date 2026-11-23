import type { RouteHandler } from '@hono/zod-openapi'
import type { postCommentsUpdateRoute } from '../routes'

export const postCommentsUpdateRouteHandler: RouteHandler<typeof postCommentsUpdateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
