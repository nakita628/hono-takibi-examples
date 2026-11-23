import type { RouteHandler } from '@hono/zod-openapi'
import type { getBatchesBatchUidRoute, getBatchesRoute } from '../routes'

export const getBatchesRouteHandler: RouteHandler<typeof getBatchesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getBatchesBatchUidRouteHandler: RouteHandler<typeof getBatchesBatchUidRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
