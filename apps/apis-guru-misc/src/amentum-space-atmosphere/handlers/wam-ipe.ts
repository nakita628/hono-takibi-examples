import type { RouteHandler } from '@hono/zod-openapi'
import type { getWamIpeRoute } from '../routes'

export const getWamIpeRouteHandler: RouteHandler<typeof getWamIpeRoute> = async (c) => {
  throw new Error('Not implemented')
}
