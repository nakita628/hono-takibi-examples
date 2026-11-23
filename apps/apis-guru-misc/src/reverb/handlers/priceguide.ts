import type { RouteHandler } from '@hono/zod-openapi'
import type { getPriceguideIdTransactionsSummaryRoute } from '../routes'

export const getPriceguideIdTransactionsSummaryRouteHandler: RouteHandler<
  typeof getPriceguideIdTransactionsSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
