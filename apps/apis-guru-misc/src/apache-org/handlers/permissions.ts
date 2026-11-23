import type { RouteHandler } from '@hono/zod-openapi'
import type { getPermissionsRoute } from '../routes'

export const getPermissionsRouteHandler: RouteHandler<typeof getPermissionsRoute> = async (c) => {
  throw new Error('Not implemented')
}
