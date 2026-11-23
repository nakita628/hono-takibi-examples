import type { RouteHandler } from '@hono/zod-openapi'
import type { getApplyRoute, postApplyRoute } from '../routes'

export const getApplyRouteHandler: RouteHandler<typeof getApplyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApplyRouteHandler: RouteHandler<typeof postApplyRoute> = async (c) => {
  throw new Error('Not implemented')
}
