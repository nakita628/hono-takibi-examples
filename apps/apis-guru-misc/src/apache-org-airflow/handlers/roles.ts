import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteRolesRoleNameRoute,
  getRolesRoleNameRoute,
  getRolesRoute,
  patchRolesRoleNameRoute,
  postRolesRoute,
} from '../routes'

export const getRolesRouteHandler: RouteHandler<typeof getRolesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postRolesRouteHandler: RouteHandler<typeof postRolesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRolesRoleNameRouteHandler: RouteHandler<
  typeof deleteRolesRoleNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRolesRoleNameRouteHandler: RouteHandler<typeof getRolesRoleNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchRolesRoleNameRouteHandler: RouteHandler<typeof patchRolesRoleNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
