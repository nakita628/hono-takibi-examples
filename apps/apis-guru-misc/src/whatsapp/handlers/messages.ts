import type { RouteHandler } from '@hono/zod-openapi'
import type { postMessagesRoute, putMessagesMessageIDRoute } from '../routes'

export const postMessagesRouteHandler: RouteHandler<typeof postMessagesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putMessagesMessageIDRouteHandler: RouteHandler<
  typeof putMessagesMessageIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}
