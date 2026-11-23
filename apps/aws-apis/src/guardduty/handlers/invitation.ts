import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getInvitationCountRoute,
  getInvitationRoute,
  postInvitationDeclineRoute,
  postInvitationDeleteRoute,
} from '../routes'

export const postInvitationDeclineRouteHandler: RouteHandler<
  typeof postInvitationDeclineRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postInvitationDeleteRouteHandler: RouteHandler<
  typeof postInvitationDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getInvitationCountRouteHandler: RouteHandler<typeof getInvitationCountRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getInvitationRouteHandler: RouteHandler<typeof getInvitationRoute> = async (c) => {
  throw new Error('Not implemented')
}
