import type { RouteHandler } from '@hono/zod-openapi'
import type { getBudgetsBudgetIDRoute, getBudgetsRoute } from '../routes'

export const getBudgetsRouteHandler: RouteHandler<typeof getBudgetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getBudgetsBudgetIDRouteHandler: RouteHandler<typeof getBudgetsBudgetIDRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
