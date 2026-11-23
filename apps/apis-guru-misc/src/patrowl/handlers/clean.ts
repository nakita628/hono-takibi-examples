import type { RouteHandler } from '@hono/zod-openapi'
import type { getCleanRoute, getCleanScanIdRoute } from '../routes'

export const getCleanRouteHandler: RouteHandler<typeof getCleanRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCleanScanIdRouteHandler: RouteHandler<typeof getCleanScanIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
