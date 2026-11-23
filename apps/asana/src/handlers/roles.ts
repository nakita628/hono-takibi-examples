import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteRolesRoleGidRoute,
  getRolesRoleGidRoute,
  getRolesRoute,
  postRolesRoute,
  putRolesRoleGidRoute,
} from '../routes'

export const getRolesRouteHandler: RouteHandler<typeof getRolesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postRolesRouteHandler: RouteHandler<typeof postRolesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRolesRoleGidRouteHandler: RouteHandler<typeof getRolesRoleGidRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putRolesRoleGidRouteHandler: RouteHandler<typeof putRolesRoleGidRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRolesRoleGidRouteHandler: RouteHandler<typeof deleteRolesRoleGidRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
