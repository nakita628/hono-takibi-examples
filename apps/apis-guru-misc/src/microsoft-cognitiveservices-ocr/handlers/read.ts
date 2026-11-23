import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getReadOperationsOperationIdRoute,
  postReadCoreAsyncBatchAnalyzeRoute,
} from '../routes'

export const postReadCoreAsyncBatchAnalyzeRouteHandler: RouteHandler<
  typeof postReadCoreAsyncBatchAnalyzeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReadOperationsOperationIdRouteHandler: RouteHandler<
  typeof getReadOperationsOperationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
