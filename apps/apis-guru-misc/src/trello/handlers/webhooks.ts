import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteWebhooksIdWebhookRoute,
  getWebhooksIdWebhookFieldRoute,
  getWebhooksIdWebhookRoute,
  postWebhooksRoute,
  putWebhooksIdWebhookActiveRoute,
  putWebhooksIdWebhookCallbackURLRoute,
  putWebhooksIdWebhookDescriptionRoute,
  putWebhooksIdWebhookIdModelRoute,
  putWebhooksIdWebhookRoute,
  putWebhooksIndexRoute,
} from '../routes'

export const postWebhooksRouteHandler: RouteHandler<typeof postWebhooksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putWebhooksIndexRouteHandler: RouteHandler<typeof putWebhooksIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteWebhooksIdWebhookRouteHandler: RouteHandler<
  typeof deleteWebhooksIdWebhookRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWebhooksIdWebhookRouteHandler: RouteHandler<
  typeof getWebhooksIdWebhookRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putWebhooksIdWebhookRouteHandler: RouteHandler<
  typeof putWebhooksIdWebhookRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putWebhooksIdWebhookActiveRouteHandler: RouteHandler<
  typeof putWebhooksIdWebhookActiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putWebhooksIdWebhookCallbackURLRouteHandler: RouteHandler<
  typeof putWebhooksIdWebhookCallbackURLRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putWebhooksIdWebhookDescriptionRouteHandler: RouteHandler<
  typeof putWebhooksIdWebhookDescriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putWebhooksIdWebhookIdModelRouteHandler: RouteHandler<
  typeof putWebhooksIdWebhookIdModelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWebhooksIdWebhookFieldRouteHandler: RouteHandler<
  typeof getWebhooksIdWebhookFieldRoute
> = async (c) => {
  throw new Error('Not implemented')
}
