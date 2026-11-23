import type { RouteHandler } from '@hono/zod-openapi'
import type { getAroonRoute } from '../routes'

export const getAroonRouteHandler: RouteHandler<typeof getAroonRoute> = async (c) => {
  throw new Error('Not implemented')
}
