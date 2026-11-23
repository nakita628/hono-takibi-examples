import type { RouteHandler } from '@hono/zod-openapi'
import type { getSubRoute } from '../routes'

export const getSubRouteHandler: RouteHandler<typeof getSubRoute> = async (c) => {
  throw new Error('Not implemented')
}
