import type { RouteHandler } from '@hono/zod-openapi'
import type { getDaysSupplyRoute } from '../routes'

export const getDaysSupplyRouteHandler: RouteHandler<typeof getDaysSupplyRoute> = async (c) => {
  throw new Error('Not implemented')
}
