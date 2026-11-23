import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionListManagedInsightRulesRoute,
  postActionListManagedInsightRulesRoute,
} from '../routes'

export const getActionListManagedInsightRulesRouteHandler: RouteHandler<
  typeof getActionListManagedInsightRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListManagedInsightRulesRouteHandler: RouteHandler<
  typeof postActionListManagedInsightRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
