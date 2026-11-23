import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateLoadBalancerListenersRoute,
  postActionCreateLoadBalancerListenersRoute,
} from '../routes'

export const getActionCreateLoadBalancerListenersRouteHandler: RouteHandler<
  typeof getActionCreateLoadBalancerListenersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateLoadBalancerListenersRouteHandler: RouteHandler<
  typeof postActionCreateLoadBalancerListenersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
