import type { RouteHandler } from '@hono/zod-openapi'
import type { postAreaRoute } from '../routes'

export const postAreaRouteHandler: RouteHandler<typeof postAreaRoute> = async (c) => {
  throw new Error('Not implemented')
}
