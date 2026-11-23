import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getMembersRoute,
  postMembersDeleteRoute,
  postMembersDisassociateRoute,
  postMembersGetRoute,
  postMembersInviteRoute,
  postMembersRoute,
} from '../routes'

export const postMembersRouteHandler: RouteHandler<typeof postMembersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getMembersRouteHandler: RouteHandler<typeof getMembersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postMembersDeleteRouteHandler: RouteHandler<typeof postMembersDeleteRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postMembersDisassociateRouteHandler: RouteHandler<
  typeof postMembersDisassociateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMembersGetRouteHandler: RouteHandler<typeof postMembersGetRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postMembersInviteRouteHandler: RouteHandler<typeof postMembersInviteRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
