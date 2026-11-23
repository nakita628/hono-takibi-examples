import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteWebhooksIdRoute,
  getWebhooksRoute,
  postWebhooksIdRoute,
  postWebhooksRoute,
  putWebhooksIdRoute,
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

export const postWebhooksIdRouteHandler: RouteHandler<typeof postWebhooksIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putWebhooksIdRouteHandler: RouteHandler<typeof putWebhooksIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
