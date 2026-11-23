import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionRejectVpcEndpointConnectionsRoute,
  postActionRejectVpcEndpointConnectionsRoute,
} from '../routes'

export const getActionRejectVpcEndpointConnectionsRouteHandler: RouteHandler<
  typeof getActionRejectVpcEndpointConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRejectVpcEndpointConnectionsRouteHandler: RouteHandler<
  typeof postActionRejectVpcEndpointConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
