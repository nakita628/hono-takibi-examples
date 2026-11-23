import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteWebhookEndpointsWebhookEndpointIdRoute,
  getWebhookEndpointsRoute,
  getWebhookEndpointsWebhookEndpointIdRoute,
  postWebhookEndpointsRoute,
  postWebhookEndpointsWebhookEndpointIdRotateSecretRoute,
  postWebhookEndpointsWebhookEndpointIdRoute,
  postWebhookEndpointsWebhookEndpointIdTestRoute,
} from '../routes'

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

export const deleteWebhookEndpointsWebhookEndpointIdRouteHandler: RouteHandler<
  typeof deleteWebhookEndpointsWebhookEndpointIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWebhookEndpointsWebhookEndpointIdRotateSecretRouteHandler: RouteHandler<
  typeof postWebhookEndpointsWebhookEndpointIdRotateSecretRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWebhookEndpointsWebhookEndpointIdTestRouteHandler: RouteHandler<
  typeof postWebhookEndpointsWebhookEndpointIdTestRoute
> = async (c) => {
  throw new Error('Not implemented')
}
