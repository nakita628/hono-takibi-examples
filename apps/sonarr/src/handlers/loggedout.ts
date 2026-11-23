import type { RouteHandler } from '@hono/zod-openapi'
import type { getLoggedoutRoute } from '../routes'

export const getLoggedoutRouteHandler: RouteHandler<typeof getLoggedoutRoute> = async (c) => {
  throw new Error('Not implemented')
}
