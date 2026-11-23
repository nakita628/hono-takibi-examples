import type { RouteHandler } from '@hono/zod-openapi'
import type { getRevisionsIdsRoute } from '../routes'

export const getRevisionsIdsRouteHandler: RouteHandler<typeof getRevisionsIdsRoute> = async (c) => {
  throw new Error('Not implemented')
}
