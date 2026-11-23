import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionSetActiveReceiptRuleSetRoute,
  postActionSetActiveReceiptRuleSetRoute,
} from '../routes'

export const getActionSetActiveReceiptRuleSetRouteHandler: RouteHandler<
  typeof getActionSetActiveReceiptRuleSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionSetActiveReceiptRuleSetRouteHandler: RouteHandler<
  typeof postActionSetActiveReceiptRuleSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
