import type { RouteHandler } from '@hono/zod-openapi'
import type { getAuthTestRoute } from '../routes'

export const getAuthTestRouteHandler: RouteHandler<typeof getAuthTestRoute> = async (c) => {
  throw new Error('Not implemented')
}
