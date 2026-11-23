import type { RouteHandler } from '@hono/zod-openapi'
import type { getSessionRoute } from '../routes'

export const getSessionRouteHandler: RouteHandler<typeof getSessionRoute> = async (c) => {
  throw new Error('Not implemented')
}
