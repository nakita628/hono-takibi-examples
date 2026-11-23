import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeReceiptRuleRoute,
  postActionDescribeReceiptRuleRoute,
} from '../routes'

export const getActionDescribeReceiptRuleRouteHandler: RouteHandler<
  typeof getActionDescribeReceiptRuleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeReceiptRuleRouteHandler: RouteHandler<
  typeof postActionDescribeReceiptRuleRoute
> = async (c) => {
  throw new Error('Not implemented')
}
