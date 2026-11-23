import type { RouteHandler } from '@hono/zod-openapi'
import type { getVenuesRoute } from '../routes'

export const getVenuesRouteHandler: RouteHandler<typeof getVenuesRoute> = async (c) => {
  throw new Error('Not implemented')
}
