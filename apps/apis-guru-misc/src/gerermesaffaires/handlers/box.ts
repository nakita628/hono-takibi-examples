import type { RouteHandler } from '@hono/zod-openapi'
import type { getBoxMenusRoute } from '../routes'

export const getBoxMenusRouteHandler: RouteHandler<typeof getBoxMenusRoute> = async (c) => {
  throw new Error('Not implemented')
}
