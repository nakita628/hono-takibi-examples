import type { RouteHandler } from '@hono/zod-openapi'
import type { postInvitesJsonRoute } from '../routes'

export const postInvitesJsonRouteHandler: RouteHandler<typeof postInvitesJsonRoute> = async (c) => {
  throw new Error('Not implemented')
}
