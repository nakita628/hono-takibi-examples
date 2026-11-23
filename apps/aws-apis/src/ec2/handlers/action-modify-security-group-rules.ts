import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifySecurityGroupRulesRoute,
  postActionModifySecurityGroupRulesRoute,
} from '../routes'

export const getActionModifySecurityGroupRulesRouteHandler: RouteHandler<
  typeof getActionModifySecurityGroupRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifySecurityGroupRulesRouteHandler: RouteHandler<
  typeof postActionModifySecurityGroupRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
