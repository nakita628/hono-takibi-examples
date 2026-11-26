import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getWebhooksRoute,
  postWebhooksRoute,
  getWebhooksWebhookGidRoute,
  putWebhooksWebhookGidRoute,
  deleteWebhooksWebhookGidRoute,
} from '../routes'

export const getWebhooksRouteHandler: RouteHandler<typeof getWebhooksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postWebhooksRouteHandler: RouteHandler<typeof postWebhooksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getWebhooksWebhookGidRouteHandler: RouteHandler<
  typeof getWebhooksWebhookGidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putWebhooksWebhookGidRouteHandler: RouteHandler<
  typeof putWebhooksWebhookGidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWebhooksWebhookGidRouteHandler: RouteHandler<
  typeof deleteWebhooksWebhookGidRoute
> = async (c) => {
  throw new Error('Not implemented')
}
