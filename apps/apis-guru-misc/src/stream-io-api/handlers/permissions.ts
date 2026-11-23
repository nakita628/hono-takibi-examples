import type { RouteHandler } from '@hono/zod-openapi'
import type { getPermissionsIdRoute, getPermissionsRoute } from '../routes'

export const getPermissionsRouteHandler: RouteHandler<typeof getPermissionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPermissionsIdRouteHandler: RouteHandler<typeof getPermissionsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
