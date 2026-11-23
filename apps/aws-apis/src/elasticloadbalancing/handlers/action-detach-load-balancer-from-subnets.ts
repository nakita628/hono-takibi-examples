import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDetachLoadBalancerFromSubnetsRoute,
  postActionDetachLoadBalancerFromSubnetsRoute,
} from '../routes'

export const getActionDetachLoadBalancerFromSubnetsRouteHandler: RouteHandler<
  typeof getActionDetachLoadBalancerFromSubnetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDetachLoadBalancerFromSubnetsRouteHandler: RouteHandler<
  typeof postActionDetachLoadBalancerFromSubnetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
