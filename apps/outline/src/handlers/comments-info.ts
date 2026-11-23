import type { RouteHandler } from '@hono/zod-openapi'
import type { postCommentsInfoRoute } from '../routes'

export const postCommentsInfoRouteHandler: RouteHandler<typeof postCommentsInfoRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
