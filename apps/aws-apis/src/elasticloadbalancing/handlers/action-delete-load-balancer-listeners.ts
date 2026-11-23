import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteLoadBalancerListenersRoute,
  postActionDeleteLoadBalancerListenersRoute,
} from '../routes'

export const getActionDeleteLoadBalancerListenersRouteHandler: RouteHandler<
  typeof getActionDeleteLoadBalancerListenersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteLoadBalancerListenersRouteHandler: RouteHandler<
  typeof postActionDeleteLoadBalancerListenersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
