import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGetInsightRuleReportRoute,
  postActionGetInsightRuleReportRoute,
} from '../routes'

export const getActionGetInsightRuleReportRouteHandler: RouteHandler<
  typeof getActionGetInsightRuleReportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetInsightRuleReportRouteHandler: RouteHandler<
  typeof postActionGetInsightRuleReportRoute
> = async (c) => {
  throw new Error('Not implemented')
}
