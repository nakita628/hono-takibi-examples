import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDisableInsightRulesRoute,
  postActionDisableInsightRulesRoute,
} from '../routes'

export const getActionDisableInsightRulesRouteHandler: RouteHandler<
  typeof getActionDisableInsightRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDisableInsightRulesRouteHandler: RouteHandler<
  typeof postActionDisableInsightRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
