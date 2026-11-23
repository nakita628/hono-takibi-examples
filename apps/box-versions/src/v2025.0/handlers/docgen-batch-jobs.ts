import type { RouteHandler } from '@hono/zod-openapi'
import type { getDocgenBatchJobsBatchIdRoute } from '../routes'

export const getDocgenBatchJobsBatchIdRouteHandler: RouteHandler<
  typeof getDocgenBatchJobsBatchIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
