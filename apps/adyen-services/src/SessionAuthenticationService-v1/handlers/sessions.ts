import type { RouteHandler } from '@hono/zod-openapi'
import type { postSessionsRoute } from '../routes'

export const postSessionsRouteHandler: RouteHandler<typeof postSessionsRoute> = async (c) => {
  throw new Error('Not implemented')
}
