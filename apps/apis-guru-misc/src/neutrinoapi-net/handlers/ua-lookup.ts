import type { RouteHandler } from '@hono/zod-openapi'
import type { getUaLookupRoute } from '../routes'

export const getUaLookupRouteHandler: RouteHandler<typeof getUaLookupRoute> = async (c) => {
  throw new Error('Not implemented')
}
