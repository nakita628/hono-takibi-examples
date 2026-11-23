import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeClientVpnRoutesRoute,
  postActionDescribeClientVpnRoutesRoute,
} from '../routes'

export const getActionDescribeClientVpnRoutesRouteHandler: RouteHandler<
  typeof getActionDescribeClientVpnRoutesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeClientVpnRoutesRouteHandler: RouteHandler<
  typeof postActionDescribeClientVpnRoutesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
