import type { RouteHandler } from '@hono/zod-openapi'
import type { getCorrelRoute } from '../routes'

export const getCorrelRouteHandler: RouteHandler<typeof getCorrelRoute> = async (c) => {
  throw new Error('Not implemented')
}
