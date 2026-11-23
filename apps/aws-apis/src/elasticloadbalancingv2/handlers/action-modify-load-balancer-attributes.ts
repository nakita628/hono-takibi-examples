import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyLoadBalancerAttributesRoute,
  postActionModifyLoadBalancerAttributesRoute,
} from '../routes'

export const getActionModifyLoadBalancerAttributesRouteHandler: RouteHandler<
  typeof getActionModifyLoadBalancerAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyLoadBalancerAttributesRouteHandler: RouteHandler<
  typeof postActionModifyLoadBalancerAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
