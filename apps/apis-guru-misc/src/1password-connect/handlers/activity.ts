import type { RouteHandler } from '@hono/zod-openapi'
import type { getActivityRoute } from '../routes'

export const getActivityRouteHandler: RouteHandler<typeof getActivityRoute> = async (c) => {
  throw new Error('Not implemented')
}
