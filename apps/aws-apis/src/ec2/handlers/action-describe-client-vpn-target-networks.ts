import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeClientVpnTargetNetworksRoute,
  postActionDescribeClientVpnTargetNetworksRoute,
} from '../routes'

export const getActionDescribeClientVpnTargetNetworksRouteHandler: RouteHandler<
  typeof getActionDescribeClientVpnTargetNetworksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeClientVpnTargetNetworksRouteHandler: RouteHandler<
  typeof postActionDescribeClientVpnTargetNetworksRoute
> = async (c) => {
  throw new Error('Not implemented')
}
