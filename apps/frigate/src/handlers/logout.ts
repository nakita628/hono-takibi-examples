import type { RouteHandler } from '@hono/zod-openapi'
import type { getLogoutRoute } from '../routes'

export const getLogoutRouteHandler: RouteHandler<typeof getLogoutRoute> = async (c) => {
  throw new Error('Not implemented')
}
