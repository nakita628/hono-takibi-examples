import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCloneReceiptRuleSetRoute,
  postActionCloneReceiptRuleSetRoute,
} from '../routes'

export const getActionCloneReceiptRuleSetRouteHandler: RouteHandler<
  typeof getActionCloneReceiptRuleSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCloneReceiptRuleSetRouteHandler: RouteHandler<
  typeof postActionCloneReceiptRuleSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
