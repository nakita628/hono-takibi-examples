import type { RouteHandler } from '@hono/zod-openapi'
import type { getEventIdsRoute } from '../routes'

export const getEventIdsRouteHandler: RouteHandler<typeof getEventIdsRoute> = async (c) => {
  throw new Error('Not implemented')
}
