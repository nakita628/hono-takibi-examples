import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteWebhooksIDRoute, getWebhooksRoute, postWebhooksRoute } from '../routes'

export const getWebhooksRouteHandler: RouteHandler<typeof getWebhooksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postWebhooksRouteHandler: RouteHandler<typeof postWebhooksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWebhooksIDRouteHandler: RouteHandler<typeof deleteWebhooksIDRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
