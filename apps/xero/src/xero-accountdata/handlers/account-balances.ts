import type { RouteHandler } from '@hono/zod-openapi'
import type { getAccountBalancesRoute } from '../routes'

export const getAccountBalancesRouteHandler: RouteHandler<typeof getAccountBalancesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
