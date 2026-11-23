import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeClientVpnAuthorizationRulesRoute,
  postActionDescribeClientVpnAuthorizationRulesRoute,
} from '../routes'

export const getActionDescribeClientVpnAuthorizationRulesRouteHandler: RouteHandler<
  typeof getActionDescribeClientVpnAuthorizationRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeClientVpnAuthorizationRulesRouteHandler: RouteHandler<
  typeof postActionDescribeClientVpnAuthorizationRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
