import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteBatchesIdRoute, getBatchesIdRoute } from '../routes'

export const deleteBatchesIdRouteHandler: RouteHandler<typeof deleteBatchesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getBatchesIdRouteHandler: RouteHandler<typeof getBatchesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
