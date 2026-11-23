import type { RouteHandler } from '@hono/zod-openapi'
import type { postCloseRoute } from '../routes'

export const postCloseRouteHandler: RouteHandler<typeof postCloseRoute> = async (c) => {
  throw new Error('Not implemented')
}
