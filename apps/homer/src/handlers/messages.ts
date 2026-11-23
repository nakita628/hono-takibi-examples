import type { RouteHandler } from '@hono/zod-openapi'
import type { getMessagesMessageIdDecodedRoute, getMessagesMessageIdRoute } from '../routes'

export const getMessagesMessageIdRouteHandler: RouteHandler<
  typeof getMessagesMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMessagesMessageIdDecodedRouteHandler: RouteHandler<
  typeof getMessagesMessageIdDecodedRoute
> = async (c) => {
  throw new Error('Not implemented')
}
