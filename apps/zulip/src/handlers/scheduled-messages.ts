import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteScheduledMessagesScheduledMessageIdRoute,
  getScheduledMessagesRoute,
  patchScheduledMessagesScheduledMessageIdRoute,
  postScheduledMessagesRoute,
} from '../routes'

export const getScheduledMessagesRouteHandler: RouteHandler<
  typeof getScheduledMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postScheduledMessagesRouteHandler: RouteHandler<
  typeof postScheduledMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchScheduledMessagesScheduledMessageIdRouteHandler: RouteHandler<
  typeof patchScheduledMessagesScheduledMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteScheduledMessagesScheduledMessageIdRouteHandler: RouteHandler<
  typeof deleteScheduledMessagesScheduledMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
