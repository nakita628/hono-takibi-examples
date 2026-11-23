import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteBatchIdRoute, getBatchIdRoute, getBatchRoute, postBatchRoute } from '../routes'

export const getBatchRouteHandler: RouteHandler<typeof getBatchRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postBatchRouteHandler: RouteHandler<typeof postBatchRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteBatchIdRouteHandler: RouteHandler<typeof deleteBatchIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getBatchIdRouteHandler: RouteHandler<typeof getBatchIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
