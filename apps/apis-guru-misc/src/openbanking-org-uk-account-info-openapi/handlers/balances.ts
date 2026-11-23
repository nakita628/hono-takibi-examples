import type { RouteHandler } from '@hono/zod-openapi'
import type { getBalancesRoute } from '../routes'

export const getBalancesRouteHandler: RouteHandler<typeof getBalancesRoute> = async (c) => {
  throw new Error('Not implemented')
}
