import type { RouteHandler } from '@hono/zod-openapi'
import type { postCommentsListRoute } from '../routes'

export const postCommentsListRouteHandler: RouteHandler<typeof postCommentsListRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
