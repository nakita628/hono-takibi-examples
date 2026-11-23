import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteInsightRulesRoute, postActionDeleteInsightRulesRoute } from '../routes'

export const getActionDeleteInsightRulesRouteHandler: RouteHandler<
  typeof getActionDeleteInsightRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteInsightRulesRouteHandler: RouteHandler<
  typeof postActionDeleteInsightRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
