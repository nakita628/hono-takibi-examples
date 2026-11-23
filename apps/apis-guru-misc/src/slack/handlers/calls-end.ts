import type { RouteHandler } from '@hono/zod-openapi'
import type { postCallsEndRoute } from '../routes'

export const postCallsEndRouteHandler: RouteHandler<typeof postCallsEndRoute> = async (c) => {
  throw new Error('Not implemented')
}
