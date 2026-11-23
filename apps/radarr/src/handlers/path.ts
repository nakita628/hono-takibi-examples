import type { RouteHandler } from '@hono/zod-openapi'
import type { getPathRoute } from '../routes'

export const getPathRouteHandler: RouteHandler<typeof getPathRoute> = async (c) => {
  throw new Error('Not implemented')
}
