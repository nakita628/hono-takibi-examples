import type { RouteHandler } from '@hono/zod-openapi'
import type { getVersionRoute, optionsVersionRoute } from '../routes'

export const getVersionRouteHandler: RouteHandler<typeof getVersionRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsVersionRouteHandler: RouteHandler<typeof optionsVersionRoute> = async (c) => {
  throw new Error('Not implemented')
}
