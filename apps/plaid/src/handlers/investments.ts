import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postInvestmentsAuthGetRoute,
  postInvestmentsHoldingsGetRoute,
  postInvestmentsRefreshRoute,
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

export const postInvestmentsRefreshRouteHandler: RouteHandler<
  typeof postInvestmentsRefreshRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postInvestmentsAuthGetRouteHandler: RouteHandler<
  typeof postInvestmentsAuthGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
