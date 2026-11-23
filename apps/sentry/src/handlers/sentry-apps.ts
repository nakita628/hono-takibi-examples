import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSentryAppsSentryAppIdOrSlugIndexRoute,
  getSentryAppsSentryAppIdOrSlugIndexRoute,
  putSentryAppsSentryAppIdOrSlugIndexRoute,
} from '../routes'

export const getSentryAppsSentryAppIdOrSlugIndexRouteHandler: RouteHandler<
  typeof getSentryAppsSentryAppIdOrSlugIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSentryAppsSentryAppIdOrSlugIndexRouteHandler: RouteHandler<
  typeof putSentryAppsSentryAppIdOrSlugIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSentryAppsSentryAppIdOrSlugIndexRouteHandler: RouteHandler<
  typeof deleteSentryAppsSentryAppIdOrSlugIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
