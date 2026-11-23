import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetUpdatesRoute } from '../routes'

export const postGetUpdatesRouteHandler: RouteHandler<typeof postGetUpdatesRoute> = async (c) => {
  throw new Error('Not implemented')
}
