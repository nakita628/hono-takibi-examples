import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionAcceptVpcEndpointConnectionsRoute,
  postActionAcceptVpcEndpointConnectionsRoute,
} from '../routes'

export const getActionAcceptVpcEndpointConnectionsRouteHandler: RouteHandler<
  typeof getActionAcceptVpcEndpointConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAcceptVpcEndpointConnectionsRouteHandler: RouteHandler<
  typeof postActionAcceptVpcEndpointConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
