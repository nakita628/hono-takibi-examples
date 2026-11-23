import type { RouteHandler } from '@hono/zod-openapi'
import type { getCacheRoute } from '../routes'

export const getCacheRouteHandler: RouteHandler<typeof getCacheRoute> = async (c) => {
  throw new Error('Not implemented')
}
