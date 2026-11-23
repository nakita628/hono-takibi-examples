import type { RouteHandler } from '@hono/zod-openapi'
import type { postMatchRoute } from '../routes'

export const postMatchRouteHandler: RouteHandler<typeof postMatchRoute> = async (c) => {
  throw new Error('Not implemented')
}
