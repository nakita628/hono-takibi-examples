import type { RouteHandler } from '@hono/zod-openapi'
import type { getAs2IncomingMessagesRoute } from '../routes'

export const getAs2IncomingMessagesRouteHandler: RouteHandler<
  typeof getAs2IncomingMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
