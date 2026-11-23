import type { RouteHandler } from '@hono/zod-openapi'
import type { getStatusDnsRoute, getStatusRoute } from '../routes'

export const getStatusRouteHandler: RouteHandler<typeof getStatusRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getStatusDnsRouteHandler: RouteHandler<typeof getStatusDnsRoute> = async (c) => {
  throw new Error('Not implemented')
}
