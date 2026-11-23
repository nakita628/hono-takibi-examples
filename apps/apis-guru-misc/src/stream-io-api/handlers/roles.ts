import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteRolesNameRoute, getRolesRoute, postRolesRoute } from '../routes'

export const getRolesRouteHandler: RouteHandler<typeof getRolesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postRolesRouteHandler: RouteHandler<typeof postRolesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRolesNameRouteHandler: RouteHandler<typeof deleteRolesNameRoute> = async (c) => {
  throw new Error('Not implemented')
}
