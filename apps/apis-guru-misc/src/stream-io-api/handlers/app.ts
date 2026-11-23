import type { RouteHandler } from '@hono/zod-openapi'
import type { getAppRoute, patchAppRoute } from '../routes'

export const getAppRouteHandler: RouteHandler<typeof getAppRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAppRouteHandler: RouteHandler<typeof patchAppRoute> = async (c) => {
  throw new Error('Not implemented')
}
