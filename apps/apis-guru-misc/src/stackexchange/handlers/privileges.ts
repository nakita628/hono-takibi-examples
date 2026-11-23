import type { RouteHandler } from '@hono/zod-openapi'
import type { getPrivilegesRoute } from '../routes'

export const getPrivilegesRouteHandler: RouteHandler<typeof getPrivilegesRoute> = async (c) => {
  throw new Error('Not implemented')
}
