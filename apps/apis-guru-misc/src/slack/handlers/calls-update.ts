import type { RouteHandler } from '@hono/zod-openapi'
import type { postCallsUpdateRoute } from '../routes'

export const postCallsUpdateRouteHandler: RouteHandler<typeof postCallsUpdateRoute> = async (c) => {
  throw new Error('Not implemented')
}
