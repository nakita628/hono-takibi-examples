import type { RouteHandler } from '@hono/zod-openapi'
import type { getIdsRoute } from '../routes'

export const getIdsRouteHandler: RouteHandler<typeof getIdsRoute> = async (c) => {
  throw new Error('Not implemented')
}
