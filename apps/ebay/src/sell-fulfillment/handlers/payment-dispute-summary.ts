import type { RouteHandler } from '@hono/zod-openapi'
import type { getPaymentDisputeSummaryRoute } from '../routes'

export const getPaymentDisputeSummaryRouteHandler: RouteHandler<
  typeof getPaymentDisputeSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
