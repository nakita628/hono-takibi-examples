import type { RouteHandler } from '@hono/zod-openapi'
import type { getMenuIndexRoute } from '../routes'

export const getMenuIndexRouteHandler: RouteHandler<typeof getMenuIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}
