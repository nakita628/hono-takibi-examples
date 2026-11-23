import type { RouteHandler } from '@hono/zod-openapi'
import type { getYpRoute } from '../routes'

export const getYpRouteHandler: RouteHandler<typeof getYpRoute> = async (c) => {
  throw new Error('Not implemented')
}
