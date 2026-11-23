import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetTokenRoute } from '../routes'

export const postGetTokenRouteHandler: RouteHandler<typeof postGetTokenRoute> = async (c) => {
  throw new Error('Not implemented')
}
