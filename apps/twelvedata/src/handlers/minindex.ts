import type { RouteHandler } from '@hono/zod-openapi'
import type { getMinindexRoute } from '../routes'

export const getMinindexRouteHandler: RouteHandler<typeof getMinindexRoute> = async (c) => {
  throw new Error('Not implemented')
}
