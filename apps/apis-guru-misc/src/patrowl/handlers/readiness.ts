import type { RouteHandler } from '@hono/zod-openapi'
import type { getReadinessRoute } from '../routes'

export const getReadinessRouteHandler: RouteHandler<typeof getReadinessRoute> = async (c) => {
  throw new Error('Not implemented')
}
