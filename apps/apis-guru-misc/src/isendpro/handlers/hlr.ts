import type { RouteHandler } from '@hono/zod-openapi'
import type { postHlrRoute } from '../routes'

export const postHlrRouteHandler: RouteHandler<typeof postHlrRoute> = async (c) => {
  throw new Error('Not implemented')
}
