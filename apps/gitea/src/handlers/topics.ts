import type { RouteHandler } from '@hono/zod-openapi'
import type { getTopicsSearchRoute } from '../routes'

export const getTopicsSearchRouteHandler: RouteHandler<typeof getTopicsSearchRoute> = async (c) => {
  throw new Error('Not implemented')
}
