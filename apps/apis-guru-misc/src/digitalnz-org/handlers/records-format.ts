import type { RouteHandler } from '@hono/zod-openapi'
import type { getRecordsFormatRoute } from '../routes'

export const getRecordsFormatRouteHandler: RouteHandler<typeof getRecordsFormatRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
