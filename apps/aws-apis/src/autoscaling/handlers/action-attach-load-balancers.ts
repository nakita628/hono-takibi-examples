import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionAttachLoadBalancersRoute,
  postActionAttachLoadBalancersRoute,
} from '../routes'

export const getActionAttachLoadBalancersRouteHandler: RouteHandler<
  typeof getActionAttachLoadBalancersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAttachLoadBalancersRouteHandler: RouteHandler<
  typeof postActionAttachLoadBalancersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
