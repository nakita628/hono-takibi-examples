import type { RouteHandler } from '@hono/zod-openapi'
import type { getDetailRecordsRoute } from '../routes'

export const getDetailRecordsRouteHandler: RouteHandler<typeof getDetailRecordsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
