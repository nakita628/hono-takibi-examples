import type { RouteHandler } from '@hono/zod-openapi'
import type { getFloorRoute } from '../routes'

export const getFloorRouteHandler: RouteHandler<typeof getFloorRoute> = async (c) => {
  throw new Error('Not implemented')
}
