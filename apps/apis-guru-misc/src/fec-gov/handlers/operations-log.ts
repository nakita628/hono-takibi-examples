import type { RouteHandler } from '@hono/zod-openapi'
import type { getOperationsLogIndexRoute } from '../routes'

export const getOperationsLogIndexRouteHandler: RouteHandler<
  typeof getOperationsLogIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
