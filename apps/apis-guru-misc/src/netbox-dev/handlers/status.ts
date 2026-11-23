import type { RouteHandler } from '@hono/zod-openapi'
import type { getStatusIndexRoute } from '../routes'

export const getStatusIndexRouteHandler: RouteHandler<typeof getStatusIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}
