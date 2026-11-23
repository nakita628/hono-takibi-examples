import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteRolesRoleIdRoute,
  getRolesRoleIdRoute,
  getRolesRoute,
  patchRolesRoleIdRoute,
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
