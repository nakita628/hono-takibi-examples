import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCreateRuleRoute, postActionCreateRuleRoute } from '../routes'

export const getActionCreateRuleRouteHandler: RouteHandler<
  typeof getActionCreateRuleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateRuleRouteHandler: RouteHandler<
  typeof postActionCreateRuleRoute
> = async (c) => {
  throw new Error('Not implemented')
}
