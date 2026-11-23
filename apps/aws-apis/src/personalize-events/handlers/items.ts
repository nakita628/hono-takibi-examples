import type { RouteHandler } from '@hono/zod-openapi'
import type { postItemsRoute } from '../routes'

export const postItemsRouteHandler: RouteHandler<typeof postItemsRoute> = async (c) => {
  throw new Error('Not implemented')
}
