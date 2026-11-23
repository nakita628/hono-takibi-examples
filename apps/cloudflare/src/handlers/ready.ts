import type { RouteHandler } from '@hono/zod-openapi'
import type { getReadyRoute } from '../routes'

export const getReadyRouteHandler: RouteHandler<typeof getReadyRoute> = async (c) => {
  throw new Error('Not implemented')
}
