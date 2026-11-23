import type { RouteHandler } from '@hono/zod-openapi'
import type { getAccountMovementsRoute } from '../routes'

export const getAccountMovementsRouteHandler: RouteHandler<
  typeof getAccountMovementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
