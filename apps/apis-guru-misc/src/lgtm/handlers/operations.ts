import type { RouteHandler } from '@hono/zod-openapi'
import type { getOperationsOperationIdRoute } from '../routes'

export const getOperationsOperationIdRouteHandler: RouteHandler<
  typeof getOperationsOperationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
