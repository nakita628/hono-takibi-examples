import type { RouteHandler } from '@hono/zod-openapi'
import type { postCloseStoresRoute } from '../routes'

export const postCloseStoresRouteHandler: RouteHandler<typeof postCloseStoresRoute> = async (c) => {
  throw new Error('Not implemented')
}
