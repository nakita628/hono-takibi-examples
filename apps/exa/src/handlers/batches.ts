import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteBatchesIdRoute,
  getBatchesIdRoute,
  getBatchesRoute,
  postBatchesIdCancelRoute,
  postBatchesRoute,
} from '../routes'

export const postBatchesRouteHandler: RouteHandler<typeof postBatchesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getBatchesRouteHandler: RouteHandler<typeof getBatchesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getBatchesIdRouteHandler: RouteHandler<typeof getBatchesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteBatchesIdRouteHandler: RouteHandler<typeof deleteBatchesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postBatchesIdCancelRouteHandler: RouteHandler<
  typeof postBatchesIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}
