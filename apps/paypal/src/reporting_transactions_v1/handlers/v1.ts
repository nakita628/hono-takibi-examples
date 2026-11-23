import type { RouteHandler } from '@hono/zod-openapi'
import type { getV1ReportingBalancesRoute, getV1ReportingTransactionsRoute } from '../routes'

export const getV1ReportingTransactionsRouteHandler: RouteHandler<
  typeof getV1ReportingTransactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ReportingBalancesRouteHandler: RouteHandler<
  typeof getV1ReportingBalancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
