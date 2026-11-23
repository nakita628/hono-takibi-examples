import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteRuleRoute, postActionDeleteRuleRoute } from '../routes'

export const getActionDeleteRuleRouteHandler: RouteHandler<
  typeof getActionDeleteRuleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteRuleRouteHandler: RouteHandler<
  typeof postActionDeleteRuleRoute
> = async (c) => {
  throw new Error('Not implemented')
}
