import type { RouteHandler } from '@hono/zod-openapi'
import type { getTestRoute } from '../routes'

export const getTestRouteHandler: RouteHandler<typeof getTestRoute> = async (c) => {
  throw new Error('Not implemented')
}
