import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getConversationsIDMessagesRoute,
  getConversationsIDRoute,
  getConversationsIDStatusesRoute,
  getConversationsStatusesRoute,
  patchConversationsIDStatusesRoute,
  postConversationsIDMessagesRoute,
  postConversationsIDSchedulesRoute,
  postConversationsIDSearchesRoute,
  postConversationsSchedulesRoute,
  postConversationsSearchesRoute,
} from '../routes'

export const postConversationsSchedulesRouteHandler: RouteHandler<
  typeof postConversationsSchedulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postConversationsSearchesRouteHandler: RouteHandler<
  typeof postConversationsSearchesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getConversationsStatusesRouteHandler: RouteHandler<
  typeof getConversationsStatusesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getConversationsIDRouteHandler: RouteHandler<typeof getConversationsIDRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getConversationsIDMessagesRouteHandler: RouteHandler<
  typeof getConversationsIDMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postConversationsIDMessagesRouteHandler: RouteHandler<
  typeof postConversationsIDMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postConversationsIDSchedulesRouteHandler: RouteHandler<
  typeof postConversationsIDSchedulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postConversationsIDSearchesRouteHandler: RouteHandler<
  typeof postConversationsIDSearchesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getConversationsIDStatusesRouteHandler: RouteHandler<
  typeof getConversationsIDStatusesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchConversationsIDStatusesRouteHandler: RouteHandler<
  typeof patchConversationsIDStatusesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
