import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postWebhooksRoute,
  getWebhooksRoute,
  getWebhooksWebhookIdRoute,
  patchWebhooksWebhookIdRoute,
  deleteWebhooksWebhookIdRoute,
  postWebhooksWebhookIdSigningSecretRotateRoute,
  getWebhooksWebhookIdEventsRoute,
  getWebhooksWebhookIdEventsEventIdRoute,
  postWebhooksWebhookIdEventsEventIdReplayRoute,
  getWebhooksWebhookIdEventsEventIdAttemptsRoute,
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

export const postWebhooksWebhookIdSigningSecretRotateRouteHandler: RouteHandler<
  typeof postWebhooksWebhookIdSigningSecretRotateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWebhooksWebhookIdEventsRouteHandler: RouteHandler<
  typeof getWebhooksWebhookIdEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWebhooksWebhookIdEventsEventIdRouteHandler: RouteHandler<
  typeof getWebhooksWebhookIdEventsEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWebhooksWebhookIdEventsEventIdReplayRouteHandler: RouteHandler<
  typeof postWebhooksWebhookIdEventsEventIdReplayRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWebhooksWebhookIdEventsEventIdAttemptsRouteHandler: RouteHandler<
  typeof getWebhooksWebhookIdEventsEventIdAttemptsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
