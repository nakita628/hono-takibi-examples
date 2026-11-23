import type { RouteHandler } from '@hono/zod-openapi'
import type { getJsonRoute } from '../routes'

export const getJsonRouteHandler: RouteHandler<typeof getJsonRoute> = async (c) => {
  throw new Error('Not implemented')
}
