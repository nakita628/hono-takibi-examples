import type { RouteHandler } from '@hono/zod-openapi'
import type { getIpAllowlistRoute, putIpAllowlistRoute } from '../routes'

export const getIpAllowlistRouteHandler: RouteHandler<typeof getIpAllowlistRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putIpAllowlistRouteHandler: RouteHandler<typeof putIpAllowlistRoute> = async (c) => {
  throw new Error('Not implemented')
}
