import type { RouteHandler } from '@hono/zod-openapi'
import type { getShardStoresRoute } from '../routes'

export const getShardStoresRouteHandler: RouteHandler<typeof getShardStoresRoute> = async (c) => {
  throw new Error('Not implemented')
}
