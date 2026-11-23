import type { RouteHandler } from '@hono/zod-openapi'
import type { getDaysToSellRoute } from '../routes'

export const getDaysToSellRouteHandler: RouteHandler<typeof getDaysToSellRoute> = async (c) => {
  throw new Error('Not implemented')
}
