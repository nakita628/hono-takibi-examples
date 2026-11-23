import type { RouteHandler } from '@hono/zod-openapi'
import type { getSystemInfoRoute, getSystemLimitsRoute } from '../routes'

export const getSystemInfoRouteHandler: RouteHandler<typeof getSystemInfoRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSystemLimitsRouteHandler: RouteHandler<typeof getSystemLimitsRoute> = async (c) => {
  throw new Error('Not implemented')
}
