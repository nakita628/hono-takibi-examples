import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteMessagesMessageIdReactionsRoute,
  deleteMessagesMessageIdRoute,
  getMessagesMatchesNarrowRoute,
  getMessagesMessageIdHistoryRoute,
  getMessagesMessageIdReadReceiptsRoute,
  getMessagesMessageIdRoute,
  getMessagesRoute,
  patchMessagesMessageIdRoute,
  postMessagesFlagsNarrowRoute,
  postMessagesFlagsRoute,
  postMessagesMessageIdReactionsRoute,
  postMessagesMessageIdReportRoute,
  postMessagesMessageIdTypingRoute,
  postMessagesRenderRoute,
  postMessagesRoute,
} from '../routes'

export const getMessagesRouteHandler: RouteHandler<typeof getMessagesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postMessagesRouteHandler: RouteHandler<typeof postMessagesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getMessagesMessageIdHistoryRouteHandler: RouteHandler<
  typeof getMessagesMessageIdHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMessagesFlagsRouteHandler: RouteHandler<typeof postMessagesFlagsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postMessagesFlagsNarrowRouteHandler: RouteHandler<
  typeof postMessagesFlagsNarrowRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMessagesRenderRouteHandler: RouteHandler<typeof postMessagesRenderRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postMessagesMessageIdReactionsRouteHandler: RouteHandler<
  typeof postMessagesMessageIdReactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMessagesMessageIdReactionsRouteHandler: RouteHandler<
  typeof deleteMessagesMessageIdReactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMessagesMessageIdReadReceiptsRouteHandler: RouteHandler<
  typeof getMessagesMessageIdReadReceiptsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMessagesMatchesNarrowRouteHandler: RouteHandler<
  typeof getMessagesMatchesNarrowRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMessagesMessageIdRouteHandler: RouteHandler<
  typeof getMessagesMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchMessagesMessageIdRouteHandler: RouteHandler<
  typeof patchMessagesMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMessagesMessageIdRouteHandler: RouteHandler<
  typeof deleteMessagesMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMessagesMessageIdReportRouteHandler: RouteHandler<
  typeof postMessagesMessageIdReportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMessagesMessageIdTypingRouteHandler: RouteHandler<
  typeof postMessagesMessageIdTypingRoute
> = async (c) => {
  throw new Error('Not implemented')
}
