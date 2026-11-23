import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteWebhooksIdRoute,
  getWebhooksIdRoute,
  getWebhooksRoute,
  getWebhooksWebhookIdLogsRoute,
  postWebhooksRoute,
  postWebhooksWebhookIdPingRoute,
} from '../routes'

export const getWebhooksRouteHandler: RouteHandler<typeof getWebhooksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postWebhooksRouteHandler: RouteHandler<typeof postWebhooksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWebhooksIdRouteHandler: RouteHandler<typeof deleteWebhooksIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getWebhooksIdRouteHandler: RouteHandler<typeof getWebhooksIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getWebhooksWebhookIdLogsRouteHandler: RouteHandler<
  typeof getWebhooksWebhookIdLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWebhooksWebhookIdPingRouteHandler: RouteHandler<
  typeof postWebhooksWebhookIdPingRoute
> = async (c) => {
  throw new Error('Not implemented')
}
