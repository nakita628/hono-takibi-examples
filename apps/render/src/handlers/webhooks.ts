import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteWebhooksWebhookIdRoute,
  getWebhooksRoute,
  getWebhooksWebhookIdEventsRoute,
  getWebhooksWebhookIdRoute,
  patchWebhooksWebhookIdRoute,
  postWebhooksRoute,
} from '../routes'

export const postWebhooksRouteHandler: RouteHandler<typeof postWebhooksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getWebhooksRouteHandler: RouteHandler<typeof getWebhooksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getWebhooksWebhookIdRouteHandler: RouteHandler<
  typeof getWebhooksWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchWebhooksWebhookIdRouteHandler: RouteHandler<
  typeof patchWebhooksWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWebhooksWebhookIdRouteHandler: RouteHandler<
  typeof deleteWebhooksWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWebhooksWebhookIdEventsRouteHandler: RouteHandler<
  typeof getWebhooksWebhookIdEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
