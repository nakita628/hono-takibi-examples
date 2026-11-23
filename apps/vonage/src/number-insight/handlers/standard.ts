import type { RouteHandler } from '@hono/zod-openapi'
import type { getStandardFormatRoute } from '../routes'

export const getStandardFormatRouteHandler: RouteHandler<typeof getStandardFormatRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
