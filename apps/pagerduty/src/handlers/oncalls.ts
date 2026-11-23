import type { RouteHandler } from '@hono/zod-openapi'
import type { getOncallsRoute } from '../routes'

export const getOncallsRouteHandler: RouteHandler<typeof getOncallsRoute> = async (c) => {
  throw new Error('Not implemented')
}
