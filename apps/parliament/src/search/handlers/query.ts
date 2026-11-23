import type { RouteHandler } from '@hono/zod-openapi'
import type { getQueryRoute } from '../routes'

export const getQueryRouteHandler: RouteHandler<typeof getQueryRoute> = async (c) => {
  throw new Error('Not implemented')
}
