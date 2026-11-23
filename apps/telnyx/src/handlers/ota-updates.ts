import type { RouteHandler } from '@hono/zod-openapi'
import type { getOtaUpdatesIdRoute, getOtaUpdatesRoute } from '../routes'

export const getOtaUpdatesRouteHandler: RouteHandler<typeof getOtaUpdatesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getOtaUpdatesIdRouteHandler: RouteHandler<typeof getOtaUpdatesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
