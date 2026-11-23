import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getInvitationsCountRoute,
  getInvitationsRoute,
  postInvitationsDeclineRoute,
  postInvitationsDeleteRoute,
} from '../routes'

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

export const getInvitationsRouteHandler: RouteHandler<typeof getInvitationsRoute> = async (c) => {
  throw new Error('Not implemented')
}
