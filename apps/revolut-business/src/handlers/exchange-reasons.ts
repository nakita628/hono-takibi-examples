import type { RouteHandler } from '@hono/zod-openapi'
import type { getExchangeReasonsRoute } from '../routes'

export const getExchangeReasonsRouteHandler: RouteHandler<typeof getExchangeReasonsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
