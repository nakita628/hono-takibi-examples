import type { RouteHandler } from '@hono/zod-openapi'
import type { getAroonoscRoute } from '../routes'

export const getAroonoscRouteHandler: RouteHandler<typeof getAroonoscRoute> = async (c) => {
  throw new Error('Not implemented')
}
