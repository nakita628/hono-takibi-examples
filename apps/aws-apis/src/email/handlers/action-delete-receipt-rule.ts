import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteReceiptRuleRoute, postActionDeleteReceiptRuleRoute } from '../routes'

export const getActionDeleteReceiptRuleRouteHandler: RouteHandler<
  typeof getActionDeleteReceiptRuleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteReceiptRuleRouteHandler: RouteHandler<
  typeof postActionDeleteReceiptRuleRoute
> = async (c) => {
  throw new Error('Not implemented')
}
