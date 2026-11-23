import type { RouteHandler } from '@hono/zod-openapi'
import type { getApiTestRoute } from '../routes'

export const getApiTestRouteHandler: RouteHandler<typeof getApiTestRoute> = async (c) => {
  throw new Error('Not implemented')
}
