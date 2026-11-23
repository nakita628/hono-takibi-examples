import type { RouteHandler } from '@hono/zod-openapi'
import type { getBulkSendJobBulkSendJobIdRoute, getBulkSendJobListRoute } from '../routes'

export const getBulkSendJobBulkSendJobIdRouteHandler: RouteHandler<
  typeof getBulkSendJobBulkSendJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBulkSendJobListRouteHandler: RouteHandler<typeof getBulkSendJobListRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
