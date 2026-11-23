import type { RouteHandler } from '@hono/zod-openapi'
import type { getSystemRoute } from '../routes'

export const getSystemRouteHandler: RouteHandler<typeof getSystemRoute> = async (c) => {
  throw new Error('Not implemented')
}
