import type { RouteHandler } from '@hono/zod-openapi'
import type { getPrivilegeRoute } from '../routes'

export const getPrivilegeRouteHandler: RouteHandler<typeof getPrivilegeRoute> = async (c) => {
  throw new Error('Not implemented')
}
