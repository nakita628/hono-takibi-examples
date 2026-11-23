import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteGroupMembershipsGroupMembershipIdRoute,
  getGroupMembershipsGroupMembershipIdRoute,
  postGroupMembershipsRoute,
  putGroupMembershipsGroupMembershipIdRoute,
} from '../routes'

export const postGroupMembershipsRouteHandler: RouteHandler<
  typeof postGroupMembershipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getGroupMembershipsGroupMembershipIdRouteHandler: RouteHandler<
  typeof getGroupMembershipsGroupMembershipIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putGroupMembershipsGroupMembershipIdRouteHandler: RouteHandler<
  typeof putGroupMembershipsGroupMembershipIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteGroupMembershipsGroupMembershipIdRouteHandler: RouteHandler<
  typeof deleteGroupMembershipsGroupMembershipIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
