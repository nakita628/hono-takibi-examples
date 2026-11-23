import type { RouteHandler } from '@hono/zod-openapi'
import type { getInvitesInviteIdRoute, postInvitesRoute } from '../routes'

export const postInvitesRouteHandler: RouteHandler<typeof postInvitesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getInvitesInviteIdRouteHandler: RouteHandler<typeof getInvitesInviteIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
