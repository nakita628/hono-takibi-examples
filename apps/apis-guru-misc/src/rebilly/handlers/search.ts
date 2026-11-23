import type { RouteHandler } from '@hono/zod-openapi'
import type { getSearchRoute } from '../routes'

export const getSearchRouteHandler: RouteHandler<typeof getSearchRoute> = async (c) => {
  throw new Error('Not implemented')
}
