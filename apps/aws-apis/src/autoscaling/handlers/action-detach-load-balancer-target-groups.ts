import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDetachLoadBalancerTargetGroupsRoute,
  postActionDetachLoadBalancerTargetGroupsRoute,
} from '../routes'

export const getActionDetachLoadBalancerTargetGroupsRouteHandler: RouteHandler<
  typeof getActionDetachLoadBalancerTargetGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDetachLoadBalancerTargetGroupsRouteHandler: RouteHandler<
  typeof postActionDetachLoadBalancerTargetGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
