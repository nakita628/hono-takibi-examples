import type { RouteHandler } from '@hono/zod-openapi'
import type { postCallsAddRoute } from '../routes'

export const postCallsAddRouteHandler: RouteHandler<typeof postCallsAddRoute> = async (c) => {
  throw new Error('Not implemented')
}
