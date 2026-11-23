import type { RouteHandler } from '@hono/zod-openapi'
import type { postContentsRoute } from '../routes'

export const postContentsRouteHandler: RouteHandler<typeof postContentsRoute> = async (c) => {
  throw new Error('Not implemented')
}
