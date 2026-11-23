import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionAttachLoadBalancerTargetGroupsRoute,
  postActionAttachLoadBalancerTargetGroupsRoute,
} from '../routes'

export const getActionAttachLoadBalancerTargetGroupsRouteHandler: RouteHandler<
  typeof getActionAttachLoadBalancerTargetGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAttachLoadBalancerTargetGroupsRouteHandler: RouteHandler<
  typeof postActionAttachLoadBalancerTargetGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
