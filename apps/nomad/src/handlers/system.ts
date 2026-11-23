import type { RouteHandler } from '@hono/zod-openapi'
import type { putSystemGcRoute, putSystemReconcileSummariesRoute } from '../routes'

export const putSystemGcRouteHandler: RouteHandler<typeof putSystemGcRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putSystemReconcileSummariesRouteHandler: RouteHandler<
  typeof putSystemReconcileSummariesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
