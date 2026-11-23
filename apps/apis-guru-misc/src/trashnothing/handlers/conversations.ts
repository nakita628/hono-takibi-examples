import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteConversationsConversationIdRoute,
  getConversationsConversationIdMessagesRoute,
  getConversationsRoute,
  getConversationsSearchRoute,
  postConversationsConversationIdReplyRoute,
  postConversationsConversationIdReportRoute,
  putConversationsArchiveAllRoute,
  putConversationsConversationIdArchiveRoute,
  putConversationsConversationIdBlockRoute,
  putConversationsConversationIdMarkReadRoute,
  putConversationsConversationIdUnarchiveRoute,
  putConversationsConversationIdUnblockRoute,
  putConversationsMarkAllReadRoute,
} from '../routes'

export const getConversationsRouteHandler: RouteHandler<typeof getConversationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putConversationsArchiveAllRouteHandler: RouteHandler<
  typeof putConversationsArchiveAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putConversationsMarkAllReadRouteHandler: RouteHandler<
  typeof putConversationsMarkAllReadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getConversationsSearchRouteHandler: RouteHandler<
  typeof getConversationsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteConversationsConversationIdRouteHandler: RouteHandler<
  typeof deleteConversationsConversationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putConversationsConversationIdArchiveRouteHandler: RouteHandler<
  typeof putConversationsConversationIdArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putConversationsConversationIdBlockRouteHandler: RouteHandler<
  typeof putConversationsConversationIdBlockRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putConversationsConversationIdMarkReadRouteHandler: RouteHandler<
  typeof putConversationsConversationIdMarkReadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getConversationsConversationIdMessagesRouteHandler: RouteHandler<
  typeof getConversationsConversationIdMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postConversationsConversationIdReplyRouteHandler: RouteHandler<
  typeof postConversationsConversationIdReplyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postConversationsConversationIdReportRouteHandler: RouteHandler<
  typeof postConversationsConversationIdReportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putConversationsConversationIdUnarchiveRouteHandler: RouteHandler<
  typeof putConversationsConversationIdUnarchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putConversationsConversationIdUnblockRouteHandler: RouteHandler<
  typeof putConversationsConversationIdUnblockRoute
> = async (c) => {
  throw new Error('Not implemented')
}
