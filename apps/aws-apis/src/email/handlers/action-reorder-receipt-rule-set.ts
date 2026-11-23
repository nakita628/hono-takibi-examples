import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionReorderReceiptRuleSetRoute,
  postActionReorderReceiptRuleSetRoute,
} from '../routes'

export const getActionReorderReceiptRuleSetRouteHandler: RouteHandler<
  typeof getActionReorderReceiptRuleSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionReorderReceiptRuleSetRouteHandler: RouteHandler<
  typeof postActionReorderReceiptRuleSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
