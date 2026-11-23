import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCostBudgetsIdRoute,
  getCostBudgetsRoute,
  patchCostBudgetsIdRoute,
  postCostBudgetsIdCancellationRoute,
  postCostBudgetsRoute,
} from '../routes'

export const getCostBudgetsRouteHandler: RouteHandler<typeof getCostBudgetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCostBudgetsRouteHandler: RouteHandler<typeof postCostBudgetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCostBudgetsIdRouteHandler: RouteHandler<typeof getCostBudgetsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchCostBudgetsIdRouteHandler: RouteHandler<typeof patchCostBudgetsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postCostBudgetsIdCancellationRouteHandler: RouteHandler<
  typeof postCostBudgetsIdCancellationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
