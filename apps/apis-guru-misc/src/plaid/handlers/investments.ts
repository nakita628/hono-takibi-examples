import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postInvestmentsHoldingsGetRoute,
  postInvestmentsTransactionsGetRoute,
} from '../routes'

export const postInvestmentsHoldingsGetRouteHandler: RouteHandler<
  typeof postInvestmentsHoldingsGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postInvestmentsTransactionsGetRouteHandler: RouteHandler<
  typeof postInvestmentsTransactionsGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
