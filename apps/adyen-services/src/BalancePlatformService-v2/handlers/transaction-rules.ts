import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteTransactionRulesTransactionRuleIdRoute,
  getTransactionRulesTransactionRuleIdRoute,
  patchTransactionRulesTransactionRuleIdRoute,
  postTransactionRulesRoute,
} from '../routes'

export const postTransactionRulesRouteHandler: RouteHandler<
  typeof postTransactionRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTransactionRulesTransactionRuleIdRouteHandler: RouteHandler<
  typeof getTransactionRulesTransactionRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTransactionRulesTransactionRuleIdRouteHandler: RouteHandler<
  typeof deleteTransactionRulesTransactionRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTransactionRulesTransactionRuleIdRouteHandler: RouteHandler<
  typeof patchTransactionRulesTransactionRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
