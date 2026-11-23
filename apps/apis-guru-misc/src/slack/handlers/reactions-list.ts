import type { RouteHandler } from '@hono/zod-openapi'
import type { getReactionsListRoute } from '../routes'

export const getReactionsListRouteHandler: RouteHandler<typeof getReactionsListRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
