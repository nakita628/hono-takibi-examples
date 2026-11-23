import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteReceiptRuleSetRoute,
  postActionDeleteReceiptRuleSetRoute,
} from '../routes'

export const getActionDeleteReceiptRuleSetRouteHandler: RouteHandler<
  typeof getActionDeleteReceiptRuleSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteReceiptRuleSetRouteHandler: RouteHandler<
  typeof postActionDeleteReceiptRuleSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
