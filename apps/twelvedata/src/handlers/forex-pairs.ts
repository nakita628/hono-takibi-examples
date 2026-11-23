import type { RouteHandler } from '@hono/zod-openapi'
import type { getForexPairsRoute } from '../routes'

export const getForexPairsRouteHandler: RouteHandler<typeof getForexPairsRoute> = async (c) => {
  throw new Error('Not implemented')
}
