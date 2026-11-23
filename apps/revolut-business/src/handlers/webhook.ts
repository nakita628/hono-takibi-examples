import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteWebhookRoute, getWebhookRoute, postWebhookRoute } from '../routes'

export const getWebhookRouteHandler: RouteHandler<typeof getWebhookRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postWebhookRouteHandler: RouteHandler<typeof postWebhookRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWebhookRouteHandler: RouteHandler<typeof deleteWebhookRoute> = async (c) => {
  throw new Error('Not implemented')
}
