import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getWebhookEndpointsRoute,
  getWebhookEndpointsWebhookEndpointIdRoute,
  postWebhookEndpointsRoute,
  postWebhookEndpointsWebhookEndpointIdDeleteRoute,
  postWebhookEndpointsWebhookEndpointIdRoute,
} from '../routes'

export const postWebhookEndpointsWebhookEndpointIdDeleteRouteHandler: RouteHandler<
  typeof postWebhookEndpointsWebhookEndpointIdDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWebhookEndpointsWebhookEndpointIdRouteHandler: RouteHandler<
  typeof getWebhookEndpointsWebhookEndpointIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWebhookEndpointsWebhookEndpointIdRouteHandler: RouteHandler<
  typeof postWebhookEndpointsWebhookEndpointIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWebhookEndpointsRouteHandler: RouteHandler<
  typeof getWebhookEndpointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWebhookEndpointsRouteHandler: RouteHandler<
  typeof postWebhookEndpointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
