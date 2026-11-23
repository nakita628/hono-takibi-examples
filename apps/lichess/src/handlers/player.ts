import type { RouteHandler } from '@hono/zod-openapi'
import type { getPlayerRoute } from '../routes'

export const getPlayerRouteHandler: RouteHandler<typeof getPlayerRoute> = async (c) => {
  throw new Error('Not implemented')
}
