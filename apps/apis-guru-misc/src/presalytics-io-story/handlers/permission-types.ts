import type { RouteHandler } from '@hono/zod-openapi'
import type { getPermissionTypesRoute } from '../routes'

export const getPermissionTypesRouteHandler: RouteHandler<typeof getPermissionTypesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
