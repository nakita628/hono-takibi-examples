import type { RouteHandler } from '@hono/zod-openapi'
import type { getListOrdersRoute } from '../routes'

export const getListOrdersRouteHandler: RouteHandler<typeof getListOrdersRoute> = async (c) => {
  throw new Error('Not implemented')
}
