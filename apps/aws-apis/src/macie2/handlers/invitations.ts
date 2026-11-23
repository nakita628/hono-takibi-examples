import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getInvitationsCountRoute,
  getInvitationsRoute,
  postInvitationsAcceptRoute,
  postInvitationsDeclineRoute,
  postInvitationsDeleteRoute,
  postInvitationsRoute,
} from '../routes'

export const postInvitationsAcceptRouteHandler: RouteHandler<
  typeof postInvitationsAcceptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postInvitationsRouteHandler: RouteHandler<typeof postInvitationsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getInvitationsRouteHandler: RouteHandler<typeof getInvitationsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postInvitationsDeclineRouteHandler: RouteHandler<
  typeof postInvitationsDeclineRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postInvitationsDeleteRouteHandler: RouteHandler<
  typeof postInvitationsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getInvitationsCountRouteHandler: RouteHandler<
  typeof getInvitationsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}
