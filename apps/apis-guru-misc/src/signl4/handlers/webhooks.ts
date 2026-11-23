import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteWebhooksWebhookIdRoute,
  getWebhooksRoute,
  getWebhooksWebhookIdRoute,
  postWebhooksRoute,
  postWebhooksWebhookIdDisableRoute,
  postWebhooksWebhookIdEnableRoute,
  putWebhooksWebhookIdRoute,
} from '../routes'

export const getWebhooksRouteHandler: RouteHandler<typeof getWebhooksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postWebhooksRouteHandler: RouteHandler<typeof postWebhooksRoute> = async (c) => {
  throw new Error('Not implemented')
}

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

export const putWebhooksWebhookIdRouteHandler: RouteHandler<
  typeof putWebhooksWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWebhooksWebhookIdDisableRouteHandler: RouteHandler<
  typeof postWebhooksWebhookIdDisableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWebhooksWebhookIdEnableRouteHandler: RouteHandler<
  typeof postWebhooksWebhookIdEnableRoute
> = async (c) => {
  throw new Error('Not implemented')
}
