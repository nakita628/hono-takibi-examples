import type { RouteHandler } from '@hono/zod-openapi'
import type { getUsageRoute } from '../routes'

export const getUsageRouteHandler: RouteHandler<typeof getUsageRoute> = async (c) => {
  throw new Error('Not implemented')
}
