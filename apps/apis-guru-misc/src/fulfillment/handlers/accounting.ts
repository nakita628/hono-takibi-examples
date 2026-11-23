import type { RouteHandler } from '@hono/zod-openapi'
import type { getAccountingRoute } from '../routes'

export const getAccountingRouteHandler: RouteHandler<typeof getAccountingRoute> = async (c) => {
  throw new Error('Not implemented')
}
