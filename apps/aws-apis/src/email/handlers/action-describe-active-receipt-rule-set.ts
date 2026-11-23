import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeActiveReceiptRuleSetRoute,
  postActionDescribeActiveReceiptRuleSetRoute,
} from '../routes'

export const getActionDescribeActiveReceiptRuleSetRouteHandler: RouteHandler<
  typeof getActionDescribeActiveReceiptRuleSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeActiveReceiptRuleSetRouteHandler: RouteHandler<
  typeof postActionDescribeActiveReceiptRuleSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
