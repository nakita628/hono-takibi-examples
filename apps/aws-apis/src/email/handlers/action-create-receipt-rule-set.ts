import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateReceiptRuleSetRoute,
  postActionCreateReceiptRuleSetRoute,
} from '../routes'

export const getActionCreateReceiptRuleSetRouteHandler: RouteHandler<
  typeof getActionCreateReceiptRuleSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateReceiptRuleSetRouteHandler: RouteHandler<
  typeof postActionCreateReceiptRuleSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
