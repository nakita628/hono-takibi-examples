import type { RouteHandler } from '@hono/zod-openapi'
import type { getAs2OutgoingMessagesRoute } from '../routes'

export const getAs2OutgoingMessagesRouteHandler: RouteHandler<
  typeof getAs2OutgoingMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
