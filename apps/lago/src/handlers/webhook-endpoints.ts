import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteWebhookEndpointsLagoIdRoute,
  getWebhookEndpointsLagoIdRoute,
  getWebhookEndpointsRoute,
  postWebhookEndpointsRoute,
  putWebhookEndpointsLagoIdRoute,
} from '../routes'

export const postWebhookEndpointsRouteHandler: RouteHandler<
  typeof postWebhookEndpointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWebhookEndpointsRouteHandler: RouteHandler<
  typeof getWebhookEndpointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putWebhookEndpointsLagoIdRouteHandler: RouteHandler<
  typeof putWebhookEndpointsLagoIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWebhookEndpointsLagoIdRouteHandler: RouteHandler<
  typeof getWebhookEndpointsLagoIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWebhookEndpointsLagoIdRouteHandler: RouteHandler<
  typeof deleteWebhookEndpointsLagoIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
