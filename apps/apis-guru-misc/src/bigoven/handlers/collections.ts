import type { RouteHandler } from '@hono/zod-openapi'
import type { getCollectionsRoute } from '../routes'

export const getCollectionsRouteHandler: RouteHandler<typeof getCollectionsRoute> = async (c) => {
  throw new Error('Not implemented')
}
