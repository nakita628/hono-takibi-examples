import type { RouteHandler } from '@hono/zod-openapi'
import type { getTsfRoute } from '../routes'

export const getTsfRouteHandler: RouteHandler<typeof getTsfRoute> = async (c) => {
  throw new Error('Not implemented')
}
