import type { RouteHandler } from '@hono/zod-openapi'
import type { getStatusRoute, getStatusScanIdRoute } from '../routes'

export const getStatusRouteHandler: RouteHandler<typeof getStatusRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getStatusScanIdRouteHandler: RouteHandler<typeof getStatusScanIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
