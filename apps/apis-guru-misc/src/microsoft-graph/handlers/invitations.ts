import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteInvitationsInvitationIdRoute,
  getInvitationsCountRoute,
  getInvitationsInvitationIdInvitedUserRoute,
  getInvitationsInvitationIdRoute,
  getInvitationsRoute,
  patchInvitationsInvitationIdRoute,
  postInvitationsRoute,
} from '../routes'

export const getInvitationsRouteHandler: RouteHandler<typeof getInvitationsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postInvitationsRouteHandler: RouteHandler<typeof postInvitationsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getInvitationsCountRouteHandler: RouteHandler<
  typeof getInvitationsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteInvitationsInvitationIdRouteHandler: RouteHandler<
  typeof deleteInvitationsInvitationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getInvitationsInvitationIdRouteHandler: RouteHandler<
  typeof getInvitationsInvitationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchInvitationsInvitationIdRouteHandler: RouteHandler<
  typeof patchInvitationsInvitationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getInvitationsInvitationIdInvitedUserRouteHandler: RouteHandler<
  typeof getInvitationsInvitationIdInvitedUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}
