import type { RouteHandler } from '@hono/zod-openapi'
import type { getVarzRoute, getVarzSettingRoute } from '../routes'

export const getVarzRouteHandler: RouteHandler<typeof getVarzRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getVarzSettingRouteHandler: RouteHandler<typeof getVarzSettingRoute> = async (c) => {
  throw new Error('Not implemented')
}
