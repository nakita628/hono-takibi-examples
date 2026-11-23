import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCardInvitationsCardInvitationIdRoute,
  getCardInvitationsRoute,
  patchCardInvitationsCardInvitationIdRoute,
  postCardInvitationsCardInvitationIdCancelRoute,
  postCardInvitationsRoute,
} from '../routes'

export const postCardInvitationsRouteHandler: RouteHandler<
  typeof postCardInvitationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCardInvitationsRouteHandler: RouteHandler<typeof getCardInvitationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getCardInvitationsCardInvitationIdRouteHandler: RouteHandler<
  typeof getCardInvitationsCardInvitationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchCardInvitationsCardInvitationIdRouteHandler: RouteHandler<
  typeof patchCardInvitationsCardInvitationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCardInvitationsCardInvitationIdCancelRouteHandler: RouteHandler<
  typeof postCardInvitationsCardInvitationIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}
