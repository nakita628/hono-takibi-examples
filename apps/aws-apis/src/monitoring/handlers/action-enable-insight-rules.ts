import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionEnableInsightRulesRoute, postActionEnableInsightRulesRoute } from '../routes'

export const getActionEnableInsightRulesRouteHandler: RouteHandler<
  typeof getActionEnableInsightRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionEnableInsightRulesRouteHandler: RouteHandler<
  typeof postActionEnableInsightRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
