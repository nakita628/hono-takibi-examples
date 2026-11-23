import type { RouteHandler } from '@hono/zod-openapi'
import type { getListingsRoute } from '../routes'

export const getListingsRouteHandler: RouteHandler<typeof getListingsRoute> = async (c) => {
  throw new Error('Not implemented')
}
