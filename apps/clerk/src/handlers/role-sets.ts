import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getRoleSetsRoute,
  postRoleSetsRoute,
  getRoleSetsRoleSetKeyOrIdRoute,
  patchRoleSetsRoleSetKeyOrIdRoute,
  postRoleSetsRoleSetKeyOrIdReplaceRoute,
  postRoleSetsRoleSetKeyOrIdRolesRoute,
  postRoleSetsRoleSetKeyOrIdRolesReplaceRoute,
} from '../routes'

export const getRoleSetsRouteHandler: RouteHandler<typeof getRoleSetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postRoleSetsRouteHandler: RouteHandler<typeof postRoleSetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRoleSetsRoleSetKeyOrIdRouteHandler: RouteHandler<
  typeof getRoleSetsRoleSetKeyOrIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchRoleSetsRoleSetKeyOrIdRouteHandler: RouteHandler<
  typeof patchRoleSetsRoleSetKeyOrIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRoleSetsRoleSetKeyOrIdReplaceRouteHandler: RouteHandler<
  typeof postRoleSetsRoleSetKeyOrIdReplaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRoleSetsRoleSetKeyOrIdRolesRouteHandler: RouteHandler<
  typeof postRoleSetsRoleSetKeyOrIdRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRoleSetsRoleSetKeyOrIdRolesReplaceRouteHandler: RouteHandler<
  typeof postRoleSetsRoleSetKeyOrIdRolesReplaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
