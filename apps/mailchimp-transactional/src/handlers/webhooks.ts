import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postWebhooksAddRoute,
  postWebhooksDeleteRoute,
  postWebhooksInfoRoute,
  postWebhooksListRoute,
  postWebhooksUpdateRoute,
} from '../routes'

export const postWebhooksListRouteHandler: RouteHandler<typeof postWebhooksListRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postWebhooksAddRouteHandler: RouteHandler<typeof postWebhooksAddRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postWebhooksInfoRouteHandler: RouteHandler<typeof postWebhooksInfoRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postWebhooksUpdateRouteHandler: RouteHandler<typeof postWebhooksUpdateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postWebhooksDeleteRouteHandler: RouteHandler<typeof postWebhooksDeleteRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
