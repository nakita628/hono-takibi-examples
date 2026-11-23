import type { RouteHandler } from '@hono/zod-openapi'
import type { getDnsBlockingRoute, postDnsBlockingRoute } from '../routes'

export const getDnsBlockingRouteHandler: RouteHandler<typeof getDnsBlockingRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postDnsBlockingRouteHandler: RouteHandler<typeof postDnsBlockingRoute> = async (c) => {
  throw new Error('Not implemented')
}
