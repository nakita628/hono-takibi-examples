import type { RouteHandler } from '@hono/zod-openapi'
import type { getCatalogRoute } from '../routes'

export const getCatalogRouteHandler: RouteHandler<typeof getCatalogRoute> = async (c) => {
  throw new Error('Not implemented')
}
