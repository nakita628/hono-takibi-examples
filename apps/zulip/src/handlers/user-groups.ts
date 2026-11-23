import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getUserGroupsRoute,
  getUserGroupsUserGroupIdMembersRoute,
  getUserGroupsUserGroupIdMembersUserIdRoute,
  getUserGroupsUserGroupIdSubgroupsRoute,
  patchUserGroupsUserGroupIdRoute,
  postUserGroupsCreateRoute,
  postUserGroupsUserGroupIdDeactivateRoute,
  postUserGroupsUserGroupIdMembersRoute,
  postUserGroupsUserGroupIdSubgroupsRoute,
} from '../routes'

export const postUserGroupsCreateRouteHandler: RouteHandler<
  typeof postUserGroupsCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserGroupsUserGroupIdMembersRouteHandler: RouteHandler<
  typeof postUserGroupsUserGroupIdMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserGroupsUserGroupIdMembersRouteHandler: RouteHandler<
  typeof getUserGroupsUserGroupIdMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchUserGroupsUserGroupIdRouteHandler: RouteHandler<
  typeof patchUserGroupsUserGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserGroupsRouteHandler: RouteHandler<typeof getUserGroupsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserGroupsUserGroupIdSubgroupsRouteHandler: RouteHandler<
  typeof postUserGroupsUserGroupIdSubgroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserGroupsUserGroupIdSubgroupsRouteHandler: RouteHandler<
  typeof getUserGroupsUserGroupIdSubgroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserGroupsUserGroupIdMembersUserIdRouteHandler: RouteHandler<
  typeof getUserGroupsUserGroupIdMembersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserGroupsUserGroupIdDeactivateRouteHandler: RouteHandler<
  typeof postUserGroupsUserGroupIdDeactivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
