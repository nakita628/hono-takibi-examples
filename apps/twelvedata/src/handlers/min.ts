import type { RouteHandler } from '@hono/zod-openapi'
import type { getMinRoute } from '../routes'

export const getMinRouteHandler: RouteHandler<typeof getMinRoute> = async (c) => {
  throw new Error('Not implemented')
}
