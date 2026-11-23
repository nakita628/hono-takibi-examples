import type { RouteHandler } from '@hono/zod-openapi'
import type { getOperationIdRoute } from '../routes'

export const getOperationIdRouteHandler: RouteHandler<typeof getOperationIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
