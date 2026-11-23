import type { RouteHandler } from '@hono/zod-openapi'
import type { getApiUsageRoute } from '../routes'

export const getApiUsageRouteHandler: RouteHandler<typeof getApiUsageRoute> = async (c) => {
  throw new Error('Not implemented')
}
