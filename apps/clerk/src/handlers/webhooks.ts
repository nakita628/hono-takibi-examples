import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteWebhooksSvixRoute,
  postWebhooksSvixRoute,
  postWebhooksSvixUrlRoute,
} from '../routes'

export const postWebhooksSvixRouteHandler: RouteHandler<typeof postWebhooksSvixRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteWebhooksSvixRouteHandler: RouteHandler<typeof deleteWebhooksSvixRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postWebhooksSvixUrlRouteHandler: RouteHandler<
  typeof postWebhooksSvixUrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}
