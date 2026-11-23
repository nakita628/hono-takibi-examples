import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteConversationsMessagesIdRoute,
  deleteConversationsPushedMessagesIdRoute,
  getConversationsMessagesIdRoute,
  getConversationsPushedMessagesIdRoute,
  postConversationsAgentOnlinePingRoute,
  postConversationsMessagesRoute,
  postConversationsPushedMessagesRoute,
  putConversationsMessagesIdRoute,
  putConversationsPushedMessagesIdRoute,
  putConversationsVisitorGroupRoute,
} from '../routes'

export const postConversationsAgentOnlinePingRouteHandler: RouteHandler<
  typeof postConversationsAgentOnlinePingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postConversationsMessagesRouteHandler: RouteHandler<
  typeof postConversationsMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteConversationsMessagesIdRouteHandler: RouteHandler<
  typeof deleteConversationsMessagesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getConversationsMessagesIdRouteHandler: RouteHandler<
  typeof getConversationsMessagesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putConversationsMessagesIdRouteHandler: RouteHandler<
  typeof putConversationsMessagesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postConversationsPushedMessagesRouteHandler: RouteHandler<
  typeof postConversationsPushedMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteConversationsPushedMessagesIdRouteHandler: RouteHandler<
  typeof deleteConversationsPushedMessagesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getConversationsPushedMessagesIdRouteHandler: RouteHandler<
  typeof getConversationsPushedMessagesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putConversationsPushedMessagesIdRouteHandler: RouteHandler<
  typeof putConversationsPushedMessagesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putConversationsVisitorGroupRouteHandler: RouteHandler<
  typeof putConversationsVisitorGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
