import type { RouteHandler } from '@hono/zod-openapi'
import type { getDebugRoute } from '../routes'

export const getDebugRouteHandler: RouteHandler<typeof getDebugRoute> = async (c) => {
  throw new Error('Not implemented')
}
