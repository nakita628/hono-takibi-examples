import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionUpdateReceiptRuleRoute, postActionUpdateReceiptRuleRoute } from '../routes'

export const getActionUpdateReceiptRuleRouteHandler: RouteHandler<
  typeof getActionUpdateReceiptRuleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionUpdateReceiptRuleRouteHandler: RouteHandler<
  typeof postActionUpdateReceiptRuleRoute
> = async (c) => {
  throw new Error('Not implemented')
}
