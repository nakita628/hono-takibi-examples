import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteWebhooksWebhookIdRoute,
  getWebhooksWebhookIdRoute,
  postWebhooksWebhookIdRoute,
} from '../routes'

export const deleteWebhooksWebhookIdRouteHandler: RouteHandler<
  typeof deleteWebhooksWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWebhooksWebhookIdRouteHandler: RouteHandler<
  typeof getWebhooksWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWebhooksWebhookIdRouteHandler: RouteHandler<
  typeof postWebhooksWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
