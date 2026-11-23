import type { RouteHandler } from '@hono/zod-openapi'
import type { postRetryDataReplicationRoute } from '../routes'

export const postRetryDataReplicationRouteHandler: RouteHandler<
  typeof postRetryDataReplicationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
