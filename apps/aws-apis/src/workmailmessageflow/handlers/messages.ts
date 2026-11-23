import type { RouteHandler } from '@hono/zod-openapi'
import type { getMessagesMessageIdRoute, postMessagesMessageIdRoute } from '../routes'

export const getMessagesMessageIdRouteHandler: RouteHandler<
  typeof getMessagesMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMessagesMessageIdRouteHandler: RouteHandler<
  typeof postMessagesMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
