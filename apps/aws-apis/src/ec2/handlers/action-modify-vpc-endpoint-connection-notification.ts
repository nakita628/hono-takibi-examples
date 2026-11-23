import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyVpcEndpointConnectionNotificationRoute,
  postActionModifyVpcEndpointConnectionNotificationRoute,
} from '../routes'

export const getActionModifyVpcEndpointConnectionNotificationRouteHandler: RouteHandler<
  typeof getActionModifyVpcEndpointConnectionNotificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyVpcEndpointConnectionNotificationRouteHandler: RouteHandler<
  typeof postActionModifyVpcEndpointConnectionNotificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
