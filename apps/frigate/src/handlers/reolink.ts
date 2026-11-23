import type { RouteHandler } from '@hono/zod-openapi'
import type { getReolinkDetectRoute } from '../routes'

export const getReolinkDetectRouteHandler: RouteHandler<typeof getReolinkDetectRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
