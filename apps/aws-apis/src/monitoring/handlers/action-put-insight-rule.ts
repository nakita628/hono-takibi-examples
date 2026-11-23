import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionPutInsightRuleRoute, postActionPutInsightRuleRoute } from '../routes'

export const getActionPutInsightRuleRouteHandler: RouteHandler<
  typeof getActionPutInsightRuleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionPutInsightRuleRouteHandler: RouteHandler<
  typeof postActionPutInsightRuleRoute
> = async (c) => {
  throw new Error('Not implemented')
}
