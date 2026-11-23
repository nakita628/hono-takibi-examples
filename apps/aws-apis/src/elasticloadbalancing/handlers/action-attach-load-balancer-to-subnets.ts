import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionAttachLoadBalancerToSubnetsRoute,
  postActionAttachLoadBalancerToSubnetsRoute,
} from '../routes'

export const getActionAttachLoadBalancerToSubnetsRouteHandler: RouteHandler<
  typeof getActionAttachLoadBalancerToSubnetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAttachLoadBalancerToSubnetsRouteHandler: RouteHandler<
  typeof postActionAttachLoadBalancerToSubnetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
