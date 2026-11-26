import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getBudgetsRoute,
  postBudgetsRoute,
  getBudgetsBudgetGidRoute,
  putBudgetsBudgetGidRoute,
  deleteBudgetsBudgetGidRoute,
} from '../routes'

export const getBudgetsRouteHandler: RouteHandler<typeof getBudgetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postBudgetsRouteHandler: RouteHandler<typeof postBudgetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getBudgetsBudgetGidRouteHandler: RouteHandler<
  typeof getBudgetsBudgetGidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putBudgetsBudgetGidRouteHandler: RouteHandler<
  typeof putBudgetsBudgetGidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteBudgetsBudgetGidRouteHandler: RouteHandler<
  typeof deleteBudgetsBudgetGidRoute
> = async (c) => {
  throw new Error('Not implemented')
}
