import type { RouteHandler } from '@hono/zod-openapi'
import type { postDeleteTargetRoute } from '../routes'

export const postDeleteTargetRouteHandler: RouteHandler<typeof postDeleteTargetRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
