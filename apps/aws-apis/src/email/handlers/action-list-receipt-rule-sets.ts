import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionListReceiptRuleSetsRoute,
  postActionListReceiptRuleSetsRoute,
} from '../routes'

export const getActionListReceiptRuleSetsRouteHandler: RouteHandler<
  typeof getActionListReceiptRuleSetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListReceiptRuleSetsRouteHandler: RouteHandler<
  typeof postActionListReceiptRuleSetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
