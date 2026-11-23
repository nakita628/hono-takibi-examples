import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteWebhooksIdRoute,
  getWebhooksIdRoute,
  getWebhooksRoute,
  patchWebhooksIdRoute,
  postWebhooksRegenerateTokenIdRoute,
  postWebhooksResendActivityIdRoute,
  postWebhooksRoute,
} from '../routes'

export const getWebhooksRouteHandler: RouteHandler<typeof getWebhooksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postWebhooksRouteHandler: RouteHandler<typeof postWebhooksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postWebhooksRegenerateTokenIdRouteHandler: RouteHandler<
  typeof postWebhooksRegenerateTokenIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWebhooksResendActivityIdRouteHandler: RouteHandler<
  typeof postWebhooksResendActivityIdRoute
> = async (c) => {
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

export const patchWebhooksIdRouteHandler: RouteHandler<typeof patchWebhooksIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
