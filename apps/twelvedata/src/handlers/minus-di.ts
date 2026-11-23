import type { RouteHandler } from '@hono/zod-openapi'
import type { getMinusDiRoute } from '../routes'

export const getMinusDiRouteHandler: RouteHandler<typeof getMinusDiRoute> = async (c) => {
  throw new Error('Not implemented')
}
