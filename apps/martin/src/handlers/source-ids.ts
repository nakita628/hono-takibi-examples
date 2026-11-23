import type { RouteHandler } from '@hono/zod-openapi'
import type { getSourceIdsRoute, getSourceIdsZXYRoute } from '../routes'

export const getSourceIdsRouteHandler: RouteHandler<typeof getSourceIdsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourceIdsZXYRouteHandler: RouteHandler<typeof getSourceIdsZXYRoute> = async (c) => {
  throw new Error('Not implemented')
}
