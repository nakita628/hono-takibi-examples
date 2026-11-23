import type { RouteHandler } from '@hono/zod-openapi'
import type { postInviteRoute } from '../routes'

export const postInviteRouteHandler: RouteHandler<typeof postInviteRoute> = async (c) => {
  throw new Error('Not implemented')
}
