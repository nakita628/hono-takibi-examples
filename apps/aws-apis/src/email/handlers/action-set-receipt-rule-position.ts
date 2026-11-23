import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionSetReceiptRulePositionRoute,
  postActionSetReceiptRulePositionRoute,
} from '../routes'

export const getActionSetReceiptRulePositionRouteHandler: RouteHandler<
  typeof getActionSetReceiptRulePositionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionSetReceiptRulePositionRouteHandler: RouteHandler<
  typeof postActionSetReceiptRulePositionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
