import type { RouteHandler } from '@hono/zod-openapi'
import type { postRealTimeRoute } from '../routes'

export const postRealTimeRouteHandler: RouteHandler<typeof postRealTimeRoute> = async (c) => {
  throw new Error('Not implemented')
}
