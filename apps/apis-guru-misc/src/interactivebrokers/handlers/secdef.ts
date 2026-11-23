import type { RouteHandler } from '@hono/zod-openapi'
import type { getSecdefRoute } from '../routes'

export const getSecdefRouteHandler: RouteHandler<typeof getSecdefRoute> = async (c) => {
  throw new Error('Not implemented')
}
