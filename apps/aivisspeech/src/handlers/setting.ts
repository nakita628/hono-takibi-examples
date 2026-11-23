import type { RouteHandler } from '@hono/zod-openapi'
import type { getSettingRoute, postSettingRoute } from '../routes'

export const getSettingRouteHandler: RouteHandler<typeof getSettingRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSettingRouteHandler: RouteHandler<typeof postSettingRoute> = async (c) => {
  throw new Error('Not implemented')
}
