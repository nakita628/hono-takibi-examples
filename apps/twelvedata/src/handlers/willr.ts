import type { RouteHandler } from '@hono/zod-openapi'
import type { getWillrRoute } from '../routes'

export const getWillrRouteHandler: RouteHandler<typeof getWillrRoute> = async (c) => {
  throw new Error('Not implemented')
}
