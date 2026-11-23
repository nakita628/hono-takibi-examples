import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionPutManagedInsightRulesRoute,
  postActionPutManagedInsightRulesRoute,
} from '../routes'

export const getActionPutManagedInsightRulesRouteHandler: RouteHandler<
  typeof getActionPutManagedInsightRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionPutManagedInsightRulesRouteHandler: RouteHandler<
  typeof postActionPutManagedInsightRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
