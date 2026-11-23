import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetGroupRoute } from '../routes'

export const postGetGroupRouteHandler: RouteHandler<typeof postGetGroupRoute> = async (c) => {
  throw new Error('Not implemented')
}
