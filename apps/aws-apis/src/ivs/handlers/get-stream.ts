import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetStreamRoute } from '../routes'

export const postGetStreamRouteHandler: RouteHandler<typeof postGetStreamRoute> = async (c) => {
  throw new Error('Not implemented')
}
