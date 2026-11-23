import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeReceiptRuleSetRoute,
  postActionDescribeReceiptRuleSetRoute,
} from '../routes'

export const getActionDescribeReceiptRuleSetRouteHandler: RouteHandler<
  typeof getActionDescribeReceiptRuleSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeReceiptRuleSetRouteHandler: RouteHandler<
  typeof postActionDescribeReceiptRuleSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
