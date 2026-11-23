import type { RouteHandler } from '@hono/zod-openapi'
import type { deletePermissionsIdRoute, getPermissionsRoute, postPermissionsRoute } from '../routes'

export const getPermissionsRouteHandler: RouteHandler<typeof getPermissionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPermissionsRouteHandler: RouteHandler<typeof postPermissionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePermissionsIdRouteHandler: RouteHandler<
  typeof deletePermissionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
