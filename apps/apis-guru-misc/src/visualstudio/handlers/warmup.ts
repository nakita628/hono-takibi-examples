import type { RouteHandler } from '@hono/zod-openapi'
import type { getWarmupRoute } from '../routes'

export const getWarmupRouteHandler: RouteHandler<typeof getWarmupRoute> = async (c) => {
  throw new Error('Not implemented')
}
