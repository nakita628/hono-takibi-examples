import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDetachLoadBalancersRoute,
  postActionDetachLoadBalancersRoute,
} from '../routes'

export const getActionDetachLoadBalancersRouteHandler: RouteHandler<
  typeof getActionDetachLoadBalancersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDetachLoadBalancersRouteHandler: RouteHandler<
  typeof postActionDetachLoadBalancersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
