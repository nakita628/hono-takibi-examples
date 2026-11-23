import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateVpcEndpointConnectionNotificationRoute,
  postActionCreateVpcEndpointConnectionNotificationRoute,
} from '../routes'

export const getActionCreateVpcEndpointConnectionNotificationRouteHandler: RouteHandler<
  typeof getActionCreateVpcEndpointConnectionNotificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateVpcEndpointConnectionNotificationRouteHandler: RouteHandler<
  typeof postActionCreateVpcEndpointConnectionNotificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
