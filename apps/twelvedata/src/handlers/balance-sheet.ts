import type { RouteHandler } from '@hono/zod-openapi'
import type { getBalanceSheetConsolidatedRoute, getBalanceSheetRoute } from '../routes'

export const getBalanceSheetRouteHandler: RouteHandler<typeof getBalanceSheetRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getBalanceSheetConsolidatedRouteHandler: RouteHandler<
  typeof getBalanceSheetConsolidatedRoute
> = async (c) => {
  throw new Error('Not implemented')
}
