import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteScopedRoleMembershipsScopedRoleMembershipIdRoute,
  getScopedRoleMembershipsCountRoute,
  getScopedRoleMembershipsRoute,
  getScopedRoleMembershipsScopedRoleMembershipIdRoute,
  patchScopedRoleMembershipsScopedRoleMembershipIdRoute,
  postScopedRoleMembershipsRoute,
} from '../routes'

export const getScopedRoleMembershipsRouteHandler: RouteHandler<
  typeof getScopedRoleMembershipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postScopedRoleMembershipsRouteHandler: RouteHandler<
  typeof postScopedRoleMembershipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getScopedRoleMembershipsScopedRoleMembershipIdRouteHandler: RouteHandler<
  typeof getScopedRoleMembershipsScopedRoleMembershipIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchScopedRoleMembershipsScopedRoleMembershipIdRouteHandler: RouteHandler<
  typeof patchScopedRoleMembershipsScopedRoleMembershipIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteScopedRoleMembershipsScopedRoleMembershipIdRouteHandler: RouteHandler<
  typeof deleteScopedRoleMembershipsScopedRoleMembershipIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getScopedRoleMembershipsCountRouteHandler: RouteHandler<
  typeof getScopedRoleMembershipsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}
