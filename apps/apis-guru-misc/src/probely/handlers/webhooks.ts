import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteWebhooksIdIndexRoute,
  getWebhooksIdIndexRoute,
  getWebhooksIndexRoute,
  patchWebhooksIdIndexRoute,
  postWebhooksIndexRoute,
  putWebhooksIdIndexRoute,
} from '../routes'

export const getWebhooksIndexRouteHandler: RouteHandler<typeof getWebhooksIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postWebhooksIndexRouteHandler: RouteHandler<typeof postWebhooksIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteWebhooksIdIndexRouteHandler: RouteHandler<
  typeof deleteWebhooksIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWebhooksIdIndexRouteHandler: RouteHandler<typeof getWebhooksIdIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchWebhooksIdIndexRouteHandler: RouteHandler<
  typeof patchWebhooksIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putWebhooksIdIndexRouteHandler: RouteHandler<typeof putWebhooksIdIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
