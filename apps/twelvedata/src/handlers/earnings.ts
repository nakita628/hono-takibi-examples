import type { RouteHandler } from '@hono/zod-openapi'
import type { getEarningsRoute } from '../routes'

export const getEarningsRouteHandler: RouteHandler<typeof getEarningsRoute> = async (c) => {
  throw new Error('Not implemented')
}
