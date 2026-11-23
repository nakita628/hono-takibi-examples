import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getBatchesBatchIdRoute,
  getBatchesRoute,
  postBatchesBatchIdCancelRoute,
  postBatchesRoute,
} from '../routes'

export const postBatchesRouteHandler: RouteHandler<typeof postBatchesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getBatchesRouteHandler: RouteHandler<typeof getBatchesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getBatchesBatchIdRouteHandler: RouteHandler<typeof getBatchesBatchIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postBatchesBatchIdCancelRouteHandler: RouteHandler<
  typeof postBatchesBatchIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}
