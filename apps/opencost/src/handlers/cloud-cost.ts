import type { RouteHandler } from '@hono/zod-openapi'
import type { getCloudCostRoute } from '../routes'

export const getCloudCostRouteHandler: RouteHandler<typeof getCloudCostRoute> = async (c) => {
  throw new Error('Not implemented')
}
