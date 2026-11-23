import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteWebhooksEndpointIdRoute,
  getWebhooksEndpointIdRoute,
  patchWebhooksEndpointIdRoute,
  postWebhooksEndpointIdRotateRoute,
  postWebhooksEndpointIdTestRoute,
} from '../routes'

export const getWebhooksEndpointIdRouteHandler: RouteHandler<
  typeof getWebhooksEndpointIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchWebhooksEndpointIdRouteHandler: RouteHandler<
  typeof patchWebhooksEndpointIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWebhooksEndpointIdRouteHandler: RouteHandler<
  typeof deleteWebhooksEndpointIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWebhooksEndpointIdTestRouteHandler: RouteHandler<
  typeof postWebhooksEndpointIdTestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWebhooksEndpointIdRotateRouteHandler: RouteHandler<
  typeof postWebhooksEndpointIdRotateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
