import type { RouteHandler } from '@hono/zod-openapi'
import type { getOpenSearchRoute } from '../routes'

export const getOpenSearchRouteHandler: RouteHandler<typeof getOpenSearchRoute> = async (c) => {
  throw new Error('Not implemented')
}
