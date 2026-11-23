import type { RouteHandler } from '@hono/zod-openapi'
import type { getHlrLookupRoute } from '../routes'

export const getHlrLookupRouteHandler: RouteHandler<typeof getHlrLookupRoute> = async (c) => {
  throw new Error('Not implemented')
}
