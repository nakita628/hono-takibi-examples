import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeInsightRulesRoute,
  postActionDescribeInsightRulesRoute,
} from '../routes'

export const getActionDescribeInsightRulesRouteHandler: RouteHandler<
  typeof getActionDescribeInsightRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeInsightRulesRouteHandler: RouteHandler<
  typeof postActionDescribeInsightRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
