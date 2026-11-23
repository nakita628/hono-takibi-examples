import type { RouteHandler } from '@hono/zod-openapi'
import type { getTextOperationsOperationIdRoute } from '../routes'

export const getTextOperationsOperationIdRouteHandler: RouteHandler<
  typeof getTextOperationsOperationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
