import type { RouteHandler } from '@hono/zod-openapi'
import type { getMapRoute } from '../routes'

export const getMapRouteHandler: RouteHandler<typeof getMapRoute> = async (c) => {
  throw new Error('Not implemented')
}
