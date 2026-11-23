import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionModifyRuleRoute, postActionModifyRuleRoute } from '../routes'

export const getActionModifyRuleRouteHandler: RouteHandler<
  typeof getActionModifyRuleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyRuleRouteHandler: RouteHandler<
  typeof postActionModifyRuleRoute
> = async (c) => {
  throw new Error('Not implemented')
}
