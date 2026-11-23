import type { RouteHandler } from '@hono/zod-openapi'
import type { getTemaRoute } from '../routes'

export const getTemaRouteHandler: RouteHandler<typeof getTemaRoute> = async (c) => {
  throw new Error('Not implemented')
}
