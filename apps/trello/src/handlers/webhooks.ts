import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteWebhooksIdRoute,
  getWebhooksIdFieldRoute,
  getWebhooksIdRoute,
  postWebhooksIndexRoute,
  putWebhooksIdRoute,
} from '../routes'

export const postWebhooksIndexRouteHandler: RouteHandler<typeof postWebhooksIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getWebhooksIdRouteHandler: RouteHandler<typeof getWebhooksIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putWebhooksIdRouteHandler: RouteHandler<typeof putWebhooksIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWebhooksIdRouteHandler: RouteHandler<typeof deleteWebhooksIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getWebhooksIdFieldRouteHandler: RouteHandler<typeof getWebhooksIdFieldRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
