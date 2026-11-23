import type { RouteHandler } from '@hono/zod-openapi'
import type { getLatestBaseCurrencyRoute } from '../routes'

export const getLatestBaseCurrencyRouteHandler: RouteHandler<
  typeof getLatestBaseCurrencyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
