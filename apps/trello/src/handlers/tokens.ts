import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteTokensTokenIndexRoute,
  deleteTokensTokenWebhooksIdWebhookRoute,
  getTokensTokenMemberRoute,
  getTokensTokenRoute,
  getTokensTokenWebhooksIdWebhookRoute,
  getTokensTokenWebhooksRoute,
  postTokensTokenWebhooksRoute,
  putTokensTokenWebhooksIdWebhookRoute,
} from '../routes'

export const getTokensTokenRouteHandler: RouteHandler<typeof getTokensTokenRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTokensTokenMemberRouteHandler: RouteHandler<
  typeof getTokensTokenMemberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTokensTokenWebhooksRouteHandler: RouteHandler<
  typeof getTokensTokenWebhooksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTokensTokenWebhooksRouteHandler: RouteHandler<
  typeof postTokensTokenWebhooksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTokensTokenWebhooksIdWebhookRouteHandler: RouteHandler<
  typeof getTokensTokenWebhooksIdWebhookRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTokensTokenWebhooksIdWebhookRouteHandler: RouteHandler<
  typeof deleteTokensTokenWebhooksIdWebhookRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putTokensTokenWebhooksIdWebhookRouteHandler: RouteHandler<
  typeof putTokensTokenWebhooksIdWebhookRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTokensTokenIndexRouteHandler: RouteHandler<
  typeof deleteTokensTokenIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
