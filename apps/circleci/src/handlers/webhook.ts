import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteWebhookWebhookIdRoute,
  getWebhookRoute,
  getWebhookWebhookIdRoute,
  postWebhookRoute,
  putWebhookWebhookIdRoute,
} from '../routes'

export const getWebhookRouteHandler: RouteHandler<typeof getWebhookRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postWebhookRouteHandler: RouteHandler<typeof postWebhookRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getWebhookWebhookIdRouteHandler: RouteHandler<
  typeof getWebhookWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putWebhookWebhookIdRouteHandler: RouteHandler<
  typeof putWebhookWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWebhookWebhookIdRouteHandler: RouteHandler<
  typeof deleteWebhookWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
