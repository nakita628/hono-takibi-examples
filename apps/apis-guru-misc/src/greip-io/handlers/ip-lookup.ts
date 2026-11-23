import type { RouteHandler } from '@hono/zod-openapi'
import type { getIPLookupRoute } from '../routes'

export const getIPLookupRouteHandler: RouteHandler<typeof getIPLookupRoute> = async (c) => {
  throw new Error('Not implemented')
}
