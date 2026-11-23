import type { RouteHandler } from '@hono/zod-openapi'
import type { getStatusPhpRoute } from '../routes'

export const getStatusPhpRouteHandler: RouteHandler<typeof getStatusPhpRoute> = async (c) => {
  throw new Error('Not implemented')
}
