import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteRolesRoleIdMembersMemberIdRoute,
  deleteRolesRoleIdRoute,
  getRolesRoleIdMembersRoute,
  getRolesRoleIdRoute,
  getRolesRoute,
  patchRolesRoleIdRoute,
  postRolesRoleIdMembersRoute,
  postRolesRoute,
} from '../routes'

export const getRolesRouteHandler: RouteHandler<typeof getRolesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postRolesRouteHandler: RouteHandler<typeof postRolesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRolesRoleIdRouteHandler: RouteHandler<typeof deleteRolesRoleIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getRolesRoleIdRouteHandler: RouteHandler<typeof getRolesRoleIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchRolesRoleIdRouteHandler: RouteHandler<typeof patchRolesRoleIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getRolesRoleIdMembersRouteHandler: RouteHandler<
  typeof getRolesRoleIdMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRolesRoleIdMembersRouteHandler: RouteHandler<
  typeof postRolesRoleIdMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRolesRoleIdMembersMemberIdRouteHandler: RouteHandler<
  typeof deleteRolesRoleIdMembersMemberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
