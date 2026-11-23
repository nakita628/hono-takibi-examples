import type { RouteHandler } from '@hono/zod-openapi'
import type { getTopSearchesRoute } from '../routes'

export const getTopSearchesRouteHandler: RouteHandler<typeof getTopSearchesRoute> = async (c) => {
  throw new Error('Not implemented')
}
