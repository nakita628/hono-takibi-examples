import type { RouteHandler } from '@hono/zod-openapi'
import type { getRecordsRoute } from '../routes'

export const getRecordsRouteHandler: RouteHandler<typeof getRecordsRoute> = async (c) => {
  throw new Error('Not implemented')
}
