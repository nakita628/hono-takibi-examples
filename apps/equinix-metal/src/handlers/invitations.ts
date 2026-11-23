import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteInvitationsIdRoute,
  getInvitationsIdRoute,
  getInvitationsRoute,
  putInvitationsIdRoute,
} from '../routes'

export const getInvitationsRouteHandler: RouteHandler<typeof getInvitationsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteInvitationsIdRouteHandler: RouteHandler<
  typeof deleteInvitationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getInvitationsIdRouteHandler: RouteHandler<typeof getInvitationsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putInvitationsIdRouteHandler: RouteHandler<typeof putInvitationsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
