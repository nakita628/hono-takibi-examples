import type { RouteHandler } from '@hono/zod-openapi'
import type { postRolesAssignRoute, postRolesUnassignRoute } from '../routes'

export const postRolesAssignRouteHandler: RouteHandler<typeof postRolesAssignRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postRolesUnassignRouteHandler: RouteHandler<typeof postRolesUnassignRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
