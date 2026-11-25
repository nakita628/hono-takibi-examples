import type { RouteHandler } from '@hono/zod-openapi'
import type { postInsertRoute } from '../routes'

export const postInsertRouteHandler: RouteHandler<typeof postInsertRoute> = async (c) => {
  throw new Error('Not implemented')
}
