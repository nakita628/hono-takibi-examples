import type { RouteHandler } from '@hono/zod-openapi'
import type { getChargesSummaryRoute } from '../routes'

export const getChargesSummaryRouteHandler: RouteHandler<typeof getChargesSummaryRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
