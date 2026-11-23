import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCreateReceiptRuleRoute, postActionCreateReceiptRuleRoute } from '../routes'

export const getActionCreateReceiptRuleRouteHandler: RouteHandler<
  typeof getActionCreateReceiptRuleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateReceiptRuleRouteHandler: RouteHandler<
  typeof postActionCreateReceiptRuleRoute
> = async (c) => {
  throw new Error('Not implemented')
}
