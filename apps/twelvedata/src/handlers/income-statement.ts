import type { RouteHandler } from '@hono/zod-openapi'
import type { getIncomeStatementConsolidatedRoute, getIncomeStatementRoute } from '../routes'

export const getIncomeStatementRouteHandler: RouteHandler<typeof getIncomeStatementRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getIncomeStatementConsolidatedRouteHandler: RouteHandler<
  typeof getIncomeStatementConsolidatedRoute
> = async (c) => {
  throw new Error('Not implemented')
}
