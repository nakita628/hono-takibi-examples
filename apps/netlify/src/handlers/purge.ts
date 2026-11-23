import type { RouteHandler } from '@hono/zod-openapi'
import type { postPurgeRoute } from '../routes'

export const postPurgeRouteHandler: RouteHandler<typeof postPurgeRoute> = async (c) => {
  throw new Error('Not implemented')
}
