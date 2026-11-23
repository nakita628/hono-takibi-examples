import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteWebhookEndpointsIdRoute,
  getWebhookEndpointsRoute,
  patchWebhookEndpointsIdRoute,
  postWebhookEndpointsRoute,
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

export const patchWebhookEndpointsIdRouteHandler: RouteHandler<
  typeof patchWebhookEndpointsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWebhookEndpointsIdRouteHandler: RouteHandler<
  typeof deleteWebhookEndpointsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
