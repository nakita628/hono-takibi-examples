import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteMembershipsMembershipGidRoute,
  getMembershipsMembershipGidRoute,
  getMembershipsRoute,
  postMembershipsRoute,
  putMembershipsMembershipGidRoute,
} from '../routes'

export const getMembershipsRouteHandler: RouteHandler<typeof getMembershipsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postMembershipsRouteHandler: RouteHandler<typeof postMembershipsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getMembershipsMembershipGidRouteHandler: RouteHandler<
  typeof getMembershipsMembershipGidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMembershipsMembershipGidRouteHandler: RouteHandler<
  typeof putMembershipsMembershipGidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMembershipsMembershipGidRouteHandler: RouteHandler<
  typeof deleteMembershipsMembershipGidRoute
> = async (c) => {
  throw new Error('Not implemented')
}
