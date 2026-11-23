import type { RouteHandler } from '@hono/zod-openapi'
import type { postSendAnimationRoute } from '../routes'

export const postSendAnimationRouteHandler: RouteHandler<typeof postSendAnimationRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
